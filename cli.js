#!/usr/bin/env node

const child_process = require("child_process");

const argv = process.argv.slice(2);
const username = process.env.NPM_USERNAME;
const password = process.env.NPM_PASSWORD;
const email = process.env.NPM_EMAIL;

if (!username) {
  console.error("Please set the NPM_USERNAME environment variable");
  process.exit(1);
}

if (!password) {
  console.error("Please set the NPM_PASSWORD environment variable");
  process.exit(1);
}

if (!email) {
  console.error("Please set the NPM_EMAIL environment variable");
  process.exit(1);
}

var npmArgs = ["adduser"].concat(argv);

const child = child_process.spawn("npm", npmArgs, {
  stdio: ["pipe", "pipe", "inherit"]
});

child.stdout.on("data", d => {
  const data = d.toString();
  process.stdout.write(d + "\n");
  if (data.match(/username/i)) {
    child.stdin.write(username + "\n");
  } else if (data.match(/password/i)) {
    child.stdin.write(password + "\n");
  } else if (data.match(/email/i)) {
    child.stdin.write(email + "\n");
  } else if (data.match(/logged in as/i)) {
    child.stdin.end();
  }
});
