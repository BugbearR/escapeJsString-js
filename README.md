# escapeJsString
[![CI](https://github.com/BugbearR/node-lib-tmpl/workflows/CI/badge.svg)](https://github.com/BugbearR/node-lib-tmpl/actions?query=workflow%3ACI) [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/BugbearR/node-lib-tmpl)

```js
import escapeJsString from "@bugbearr/escapejsstring";
// var escapeJsString = require("@bugbearr/escapejsstring");

// Escape C0 chars and HTML, XML, JavaScript special chars for JavaScript string.
console.log(escapeJsString("\"<Hello,\r\n world!>\"\r\n"));
// Console.out
// \u0022\u003cHello,\r\n world!\u003e\u0022\r\n
```
