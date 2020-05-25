#!/usr/bin/env python3

"""
health-checker runs simple health checks on a portal node using the spd API and
dispatches messages to a Discord channel.
"""

import discord, traceback
from bot_utils import setup, send_msg, spd, scp_precision

bot_token = setup()
client = discord.Client()

@client.event
async def on_ready():
    await run_checks()
    await client.close()


async def run_checks():
    print("Running Public Portal health checks")
    try:
        await check_health()

    except: # catch all exceptions
        trace = traceback.format_exc()
        await send_msg(client, "```\n{}\n```".format(trace), force_notify=True)


# check_health checks that the wallet is unlocked, that it has at least 1
# allowance worth of money left, and if more than hald the allowance is spent. If
# all checks pass it sends a informational message.
async def check_health():
    print("\nChecking wallet/funds health...")
    wallet_get = spd.get_wallet()
    renter_get = spd.get_renter()

    if not wallet_get['unlocked']:
        await send_msg(client, "Wallet locked", force_notify=True)
        return

    confirmed_coins = int(wallet_get['confirmedscpbalance'])
    unconfirmed_coins = int(wallet_get['unconfirmedincomingscp'])
    unconfirmed_outgoing_coins = int(wallet_get['unconfirmedoutgoingscp'])
    balance = confirmed_coins + unconfirmed_coins - unconfirmed_outgoing_coins
    print("Balance: ", balance / scp_precision)

    allowance = renter_get['settings']['allowance']
    allowance_funds = int(allowance['funds'])
    allocated_funds = int(renter_get['financialmetrics']['totalallocated'])
    unallocated_funds = allowance_funds - allocated_funds


    balance_msg = "Balance: `{} SCP` Allowance Funds: `{} SCP`".format(round(balance/scp_precision), round(allowance_funds/scp_precision))
    alloc_msg = "Unallocated: `{} SCP`\nAllocated: `{} SCP`".format(round(unallocated_funds/scp_precision), round(allocated_funds/scp_precision))

    # Send an alert if there is less than 1 allowance worth of money left.
    if balance < allowance_funds:
        await send_msg(client, "Wallet balance running low. \n{}`".format(balance_msg), force_notify=True)
        return

    # Alert devs when 1/2 the allowance is gone
    if allocated_funds  >= unallocated_funds:
        await send_msg(client, "Allowance half spent: \n{}".format(alloc_msg), force_notify=True)
        return

    # Send an informational heartbeat if all checks passed.
    await send_msg(client, "Health checks passed:\n{} \n{}".format(balance_msg, alloc_msg))

client.run(bot_token)
