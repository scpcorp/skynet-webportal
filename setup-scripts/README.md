# Public Portal Setup Scripts

This directory contains a setup guide and scripts that will install and
configure some basic requirements for running a Public Portal. The assumption is
that we are working with a Debian Buster Minimal system or similar.

## Initial Setup

(Assumes we are logged in as root on a fresh installation of Debian)

You may want to fork this repository and add your ssh pubkey to
`authorized_keys` and optionally edit the `tmux` and `bash` configurations.

0. SSH in a freshly installed Debian machine.
1. `apt-get update && apt-get install sudo`
1. `adduser user`
1. `usermod -a -G sudo user`
1. Quit the ssh session.

You a can now ssh into your machine as the user `user`.

5. On your local machine: `ssh-copy-id user@ip-addr`
6. On your local machine: `ssh user@ip-addr`
7. Now logged in as `user`: `sudo apt-get install git`
8. `git clone https://github.com/scpcorp/skynet-webportal`
9. `cd skynet-webportal/setup-scripts`
10. `./setup.sh`
11. Once DNS records are set you can run: `./letsencrypt-setup.sh`
12. This should edit your nginx configuration for you. If not, you should check
    that keys were created by letsencrypt in `/etc/letsencrypt/live/` and add
    the following lines into your nginx configuration. Make sure to replace
    `YOUR-DOMAIN` with your domain name.
    ```
    ssl_certificate /etc/letsencrypt/live/YOUR-DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/YOUR-DOMAIN/privkey.pem;
    ```
13. Finally make sure to check your nginx conf and reload nginx:
    `sudo nginx -t`
    `sudo systemctl reload nginx`

## Running spd

NOTE: You must be running `spd` and `spc` by building from a version at least
as recent as `v1.4.3`.

You still need to setup `spd` for the backend to be complete.

The setup script creates a systemd user service that will run `spd` in the
background and automatically restart upon failure. The `spd.service` file must
be placed in `~/.config/systemd/user/`

To use the `spd.service`, first fill out `~/.scprime/siaprime.env` environment variables with the
correct values. You will need to initialize your wallet if you have not already
done so.

To enable the service: `systemctl --user enable spd.service`

### Running 2 spd instances

It is recommended to run 2 `spd` nodes on the same server. One node to
prioritize downloads and one to prioritze uploads. This will drastically improve
performance of both up - and download. The setup scripts assume this double spd
setup and perform the initial setup for a 2nd `spd` instance running as a
systemd service `spd-upload.service` in the `~/spd-upload/` directory with
environment variables in `spc-upload.env`. You must fill out the correct values
for those environment variables.

Note that running 2 `spd` nodes is not obligatory. You can run a portal with
just one `spd` node just fine. If you choose to do so, simply ignore the second
`spd` node and point everything to your single node instead.

The `bashrc` file in this repository also provides an alias `spc-upload` that
loads the correct environment variables and sets the correct ports to interact
with the 2nd `spd` node.

`spc` is used to operate node 1, and `spc-upload` is used to operate node 2.

To enable the 2nd service: `systemctl --user enable spd-upload.service`

### Useful Commands

To start the service: `systemctl --user start spd`

To stop it: `systemctl --user stop spd`

To check the status of it: `systemctl --user status spd`

To check standard err/standard out: `journalctl --user-unit spd`. In addition you can add:

- `-r` to view journal from the newest entry
- `-f` to follow and `-n INTEGER` to specify number of lines

## Portal Setup

When `spd` is done syncing, create a new wallet and unlock the wallet.

Then set an allowance (`spc renter setallowance`), with the suggested values
below:

- 1000 SCP (keep 2500 SCP in your wallet)
- default period
- default number of hosts
- 8 week renewal time
- 500 GB expected storage
- 500 GB expected upload
- 5 TB expected download
- default redundancy

Once your allowance is set you need to set your node to be a viewnode with the
following command:
`spc renter setallowance --payment-contract-initial-funding 10SC`

Now your node will begin making 10 contracts per block with many hosts so it can
potentially view the whole network's files.

## Running the Portal

Make sure you have [nodejs](https://nodejs.org/en/download/package-manager/) and [yarn](https://yarnpkg.com/getting-started/install) installed.
You can check that with `node -v` and `yarn -v` commands respectively.

- run `cd /home/user/skynet-webportal`
- run `yarn` to build dependencies
- run `yarn build` to build the client package

Client package will be outputted to `/public` and nginx configuration will pick it up automatically.

## Health Check Scripts.

There are 2 optional health check scripts that can be setup using
`setup-health-check-scripts.sh`. That command will install the necesary Python
dependencies and setup 2 cronjobs for each script: one for a downloading `spd`
and for an uploading `spd` service.

To use the scripts you must setup a Discord bot and provide a bot token. The bot
scripts take in 1 or more arguments, the first always being the path to an
`.env` file.

`funds-checker` checks that the wallet balance and allowance settings are
sufficient for portal usage.

`log-checker` checks if there are any critical warnings in the journal for the
running services.
