---
next: ./structure.md # Will overwrite 'nextLinks' property from themeConfig
---

![](https://github.com/enyosolutions-team/axel-core/workflows/CI/badge.svg)
[![Version](https://img.shields.io/npm/v/axel-core.svg)](https://npmjs.org/package/axel-core)
[![Downloads/week](https://img.shields.io/npm/dw/axel-core.svg)](https://npmjs.org/package/axel-core)
[![License](https://img.shields.io/npm/l/axel-core.svg)](https://github.com/enyosolutions-team/axel-core/blob/master/package.json)

## Presentation

Axel is a framework that provide all the minimum structure necessary to get started with an api project, while beeing fast and flexible.
It uses :

- express for the http routing
- Sequelize as an ORM for relational databases
- Mongoose as an ORM for mongo databases
- Ejs for templating.

The orm and template engine can be changed at any time.

## features

- Mvc structure for easy navigation
- routing configuration via a simple object.
- Merged config for simply accessing all the configuration elements.
- Common services already baked in : mail, cron, sockets
- Ready to use backoffice
- Fully featured crud routes
- Build a back office in a single day.
- Connect to an existing REST api and start working.
- Import and export data to Excel easily.
- Display table and edit their contents easily.
- Link objects with their foreign counterpart easily (foreign key support, nested tab support).

## Quick Start

The easiest way to get started is to use the cli starter.

```shell
# Install deps
npx axel-core new <project-name>
```

Follow the instructions to create
Once the project is created, install the dependencies

```shell
cd <project-name>
# Install deps
npm install # or yarn install

# Setup environment config (if present)
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
