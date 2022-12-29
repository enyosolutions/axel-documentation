---
---

# Routing

===========

In Axel, all the routes are defined in `src/config/routes.js`

The routing is made using a key value system. The key contains the route (optionnally prefixed with the method) and the values is controller or view assodicated to the route.

A route can point to :

- a controller string
- a controller with an object definition
- a view template (without using a controller)
- an express style route.

```js
// const express = require('express');
/*
type RouteObject = {
  routes : {
    [key: string]: RouteDefinitions;
  };
};
*/

module.exports = {
  routes: {
    // '/': {
    //   controller: 'core/App',
    //   action: 'app',
    //   secure: false, // you need this if you defined you api as always secure !
    //   skipAssets: true,
    // },

    '/': {
      controller: 'core/AppController',
      action: 'index',
      secure: false,
    },

    '/^(login|register|forgot-password|password-reset|app|reset-password)$': {
      controller: 'core/App',
      action: 'app',
      skipAssets: true,
      secure: false,
    },

    '/app.*': {
      controller: 'core/App',
      action: 'app',
      skipAssets: true,
      secure: false,
    },

    '/reset-password/:id': {
      controller: 'core/App',
      action: 'app',
      skipAssets: true,
      secure: false,
    },

    '/api/swagger.json': {
      controller: 'core/AppController',
      action: 'swaggerJson',
      secure: false,
    },

    '/api/swagger.yml': {
      controller: 'core/AppController',
      action: 'swaggerYml',
      secure: false,
    },

    '/console': {
      view: 'swagger',
      secure: false,
    },

    'GET /api/statistics/overview': 'core/AppController.statistics',

    'POST /api/auth/login': {
      controller: '@axel/controllers/AuthController',
      action: 'login',
      secure: false,
    },
  },
};
```

## src

### api
