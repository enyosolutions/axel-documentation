---
sidebar: auto
---

# @axel/core

# folder structure

```bash
axel.config.js # configuration of the framework regarding path and folders
index.js # entry points of the framework
public # folder container publicly available data (eg css, client side js, uploads etc)
resources # Folder for storing various resources
  locales # Translations files for the i18n component
  sequlize # Sequelize cli related files
    config # Config for sequelize cli
    migrations # folder that contains all the sequelize migrations.
    models # Bridge to connect the app models with sequlize cli
scripts # cli utility scripts
src # code source (js or ts)
test # unit tests
tmp # tmp folder for various purposes
views # ejs templates files
```

## src folder

```bash

api # api code
  controllers # controllers that connects to routes (depending on config/routes.js)
  middlewares # express middleware loader
  models ## data model files
    sequelize ## relational db files (sequelize format see https://sequelize.org/docs/v6/core-concepts/model-basics/  and mongoose to come soon)
    schema ## json schema files used for the frontends and for data validation
    hooks ## lifecycles hooks that are executed at various steps of the query. see https://github.com/enyosolutions-team/axel-cli/blob/master/src/commands/generate/templates/models/sql-hooks.tpl
  policies ## express middlewares used to control various security aspects. Ex: isAuthorized.js check if the user can access the route
  services ## folder containing your js code
config ## folder containing the config of the project.
resources
middlewares.js
bootstrap.js


```

### Config

This folder contains the various config of the project. All configs are merged into the `axel.config` object. The priority is alphabetical, excepts for `local.js` which is merged last.

```bash
  default.js # Contains all the config that you want to store but don't know where to put it.
  framework.js # Config regarding the  automatic behaviors of the axel framework
  i18n.js # Cnnfig for the i18n and translation features
  local.js.dist #  specific config (DB connexion, app name, env etc)
  logger.js # config of the axel.logger
  plugins.js # Config of the various axel plugins : admin, manager, auth, socket etc.
  policies.js # Links policies middlewares (src/api/policies/) to routes
  routes.js # Links a route to a controller. If this file becomes to big. You can split into many smaller files.
  security.js # Config for various security features, including CORS, endpoint securing etc.
  sockets.js # config for socket.io
  sqldb.js ## database connexion credentials (sequelize https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database)
  swagger.js ## swagger config (/api/documentation and /api/swagger)
  views.js ## templating engine config
```
