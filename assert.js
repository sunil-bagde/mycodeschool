const assert = require("assert").strict;

function expect(act, exp, msg = "") {
    try {
        assert.deepEqual(act, exp, msg);
        console.log("\x1b[32m%s\x1b[0m", "Pass!");
    } catch (e) {
        console.log("\x1b[32m%s\x1b[0m", "Actual!", e.actual);

        console.log("\x1b[31m%s\x1b[0m", "Expected!", e.expected);
    }
}

module.exports = {
    expect,
    assert,
};
