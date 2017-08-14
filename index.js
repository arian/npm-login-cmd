#!/usr/bin/env node

const child_process = require("child_process");
const child = child_process.spawn("npm", ["login", "-q"]);

const username = process.env.NPM_USER;
const password = process.env.NPM_PASS;
const email = process.env.NPM_EMAIL;

child.stdout.on("data", data => {
  const string = data.toString();
  if (string.match(/username/i)) {
    child.stdin.write(username + "\n");
  } else if (string.match(/password/i)) {
    child.stdin.write(password + "\n");
  } else if (string.match(/email/i)) {
    child.stdin.write(email + "\n");
  }
  console.log(string);
});
