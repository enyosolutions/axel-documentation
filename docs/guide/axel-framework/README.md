---
sidebar: auto
next: ./structure.md # Will overwrite 'nextLinks' property from themeConfig
---

# @axel/core

## Quick Start

Get started developing...

```shell
# Install deps
npm install

# Setup environment (if present)
cp .env.dist .env

# Create the local configuration file
cp api/src/config/local.js.dist api/src/config/local.js

# Edit config to add bd credentials in the sql db section
nano api/src/config/local.js

# Run in development mode
npm run dev

# Run tests
npm run test
```

---

## Install Dependencies

Install all package dependencies (one time operation)

```shell
npm install
```

# Setup environment

Create the `.env` file at the root (example can be found in the `.env.test` file).

Enter the MySQL database config in `api/src/config/local.js` (`sqldb` section)

# Synchronize

## Run It

#### Run in _development_ mode:

Runs the application is development mode. Should not be used in production

```shell
npm run dev
```

or debug it

```shell
npm run dev:debug
```

#### Run in _production_ mode:

Starts it in production mode.

```shell
npm run start
```

## Test It

Run the Mocha unit tests

```shell
npm test
```

or debug them

```shell
npm run test:debug
```

## Try It

- Open you're browser to [http://localhost:3000](http://localhost:3000)
  You should be in the axel manager

## Debug It

#### Debug the server:

```
npm run dev:debug
```

#### Debug Tests

```
npm run test
```

#### Debug with VSCode

Add these [contents](https://github.com/cdimascio/generator-express-no-stress/blob/next/assets/.vscode/launch.json) to your `.vscode/launch.json` file
