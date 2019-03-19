# npm-login-cli

A simple script to login into npm from the command line, in case you don't have
an interactive shell, `expect` or anything fancy.

### Usage

```bash
npm -g install npm-login-cli

export NPM_USERNAME=john
export NPM_PASSWORD=secret
export NPM_EMAIL=john@example.com
npm-login-cli
```

### How it works

It's a simple child process that reads/writes from/to the stdout/stdin.
