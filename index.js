#!/usr/bin/env node

const child_process = require("child_process");

const username = process.env.NPM_USER;
const password = process.env.NPM_PASS;
const email = process.env.NPM_EMAIL;

if (!username) {
  console.error("Please set the NPM_USER environment variable");
  process.exit(1);
}

if (!password) {
  console.error("Please set the NPM_PASS environment variable");
  process.exit(1);
}

if (!email) {
  console.error("Please set the NPM_EMAIL environment variable");
  process.exit(1);
}

const child = child_process.spawn("npm", ["login", "-q"], {
  stdio: ["pipe", "inherit", "inherit"]
});

child.stdin.write(username + "\n");
child.stdin.write(password + "\n");
child.stdin.write(email + "\n");
child.stdin.end();
