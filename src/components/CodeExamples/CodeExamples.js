import React, { useState, useContext } from "react";
import classNames from "classnames";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { javascript, go, python, bash } from "react-syntax-highlighter/dist/esm/languages/hljs";
import Colors from "./Colors";

import "./CodeExamples.scss";
import AppContext from "../../AppContext";



export default function CodeExamples() {

  return (
    <div className="code-examples">
      <div className="code-examples-tabs">


      </div>
    </div>
  );
}
