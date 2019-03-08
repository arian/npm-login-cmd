# npm-login-cmd

A simple script to login into npm from the command line, in case you don't have
an interactive shell, `expect` or anything fancy.

### Usage

With parameters
`npx npm-login-cmd -u john -p secret -e john@test.com`

With environment variables

```bash
export NPM_USER=john
export NPM_PASS=secret
export NPM_EMAIL=john@example.com
npx npm-login-cmd
```

### How it works

It's a simple child process that reads/writes from/to the stdout/stdin.
