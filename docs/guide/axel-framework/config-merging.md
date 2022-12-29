---
---

# Configuration

The configuration if manage by merging the contents fo `src/config/*` into a single config object.

This folder contains the various config of the project. All configs are merged into the axel.config object. The priority is alphabetical, excepts for local.js which is merged last.

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
  mail.js ## nodemailer config
  views.js ## templating engine config
```
