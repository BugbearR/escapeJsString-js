# escapeJsString
[![CI](https://github.com/BugbearR/escapeJsString-js/workflows/CI/badge.svg)](https://github.com/BugbearR/escapeJsString-js/actions?query=workflow%3ACI) [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/BugbearR/escapeJsString-js)

```js
import escapeJsString from "@bugbearr/escapejsstring";
// var escapeJsString = require("@bugbearr/escapejsstring").default;

// Escape C0 chars and HTML, XML, JavaScript special chars for JavaScript string.
console.log(escapeJsString("\"<Hello,\r\n world!>\"\r\n"));
// Console.out
// \u0022\u003cHello,\r\n world!\u003e\u0022\r\n
```
