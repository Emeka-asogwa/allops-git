const assert = require("node:assert");
const { greet } = require("./app");

assert.strictEqual(greet(), "Hello, World!");
assert.strictEqual(greet("AllOps"), "Hello, AllOps!");

console.log("All tests passed.");
