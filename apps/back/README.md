# Backend

This is back end express.js app.

## Typescript

It has a typescript supprot, but is set to not do a strict check and it accepts Javacsript files as well, if you don't want to use TypeScript.

## Running

Simply from your terminal run

```console
pnpm run dev
```

Or from the projects root:

```console
pnpn run back
```

This will start `nodemon` which will run your application on predefined port.

## .env

`dotenv` is used to configure environment variables - variables that depend on the environment and change between them. E.g. your local computer and production app.

Copy `example.env` to a file `.env` - this file is set to be ignroed by git and it won't be pushed to the repositry.
