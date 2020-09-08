import escapeJsString from "../esm/index";

test("Hello, world!", () => {
    expect(escapeJsString("\"<Hello,\r\n world!>\"\r\n")).toBe("\\u0022\\u003cHello,\\r\\n world!\\u003e\\u0022\\r\\n");
});

test("All char", () => {
    expect(escapeJsString(
            "\x00\x01\x02\x03\x04\x05\x06\x07\x08\x09\x0a\x0b\x0c\x0d\x0e\x0f"
            + "\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f"
            + "$&'\-<>[\\]`\x7f\u2028\u2029")).toBe(
                "\\u0000\\u0001\\u0002\\u0003\\u0004\\u0005\\u0006\\u0007\\b\\t\\n\\v\\f\\r\\u000e\\u000f"
                + "\\u0010\\u0011\\u0012\\u0013\\u0014\\u0015\\u0016\\u0017\\u0018\\u0019\\u001a\\u001b\\u001c\\u001d\\u001e\\u001f"
                + "\\u0024\\u0026\\u0027\\u002d\\u003c\\u003e\\u005b\\\\\\u005d\\u0060\\u007f\\u2028\\u2029");
});
