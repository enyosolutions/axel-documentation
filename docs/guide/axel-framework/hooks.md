---
sidebar: auto
---

# @axel/core

# hooks

Hooks are events that can be used to access or modify objects in the application before and after the creation of entities via the endpoints.
they are defined in the hooks folders. There are two kinds of hooks api and database hooks.

## Api hooks

Api hooks are executed at the controller level. They represent a macro level of access.

The before hooks contain the following context :

`const context = {request : ExpressRequest, sequelizeQuery: SequelizeRequest }`

if you need to modify the body of a request you can do so by accessing the request object.

Example

```
// before creating an item affect the current user to request if it wasn't done before
module.exports.beforeApiCreate  = (context) => {
  if (context.request.body.createdBy && context.request.user) {
    context.request.body.createdBy = context.request.user.id
  }
}
```

List of api hooks.

```
// API middlewares
// context is an alias for context
// const {request : ExpressRequest, sequelizeQuery: SequelizeRequest } = context;
// api middlewares must return a promise or throw an error.
module.exports.beforeApiFind    = (context) => {}
module.exports.beforeApiFindOne = (context) => {}
module.exports.beforeApiCreate  = (context) => {}
module.exports.beforeApiUpdate  = (context) => {}
module.exports.beforeApiDelete  = (context) => {}

/**
* result the body of the response sent to the client
* context  = {request: Express Request, response: Express Response}
*/
module.exports.afterApiFind    = (result, context) => {}
module.exports.afterApiFindOne = (result, context) => {}
module.exports.afterApiCreate  = (result, context) => {}
module.exports.afterApiUpdate  = (result, context) => {}

```

## Database hooks

Databade hooks are hooks that run on the ORM system. their name is tied to the underlying ORM.

```
module.exports.beforeCreate = (<%= identity %>, options) => {}
module.exports.beforeDestroy = (<%= identity %>, options) => {}
module.exports.beforeUpdate = (<%= identity %>, options) => {}
module.exports.beforeSave = (<%= identity %>, options) => {}
module.exports.beforeUpsert = (values, options) => {}

module.exports.beforeBulkCreate = (<%= identity %>s, options) => {}
module.exports.beforeBulkDestroy = (options) => {}
module.exports.beforeBulkUpdate = (options) => {}

module.exports.beforeFind = (<%= identity %>s, options) => {}

// After
module.exports.afterCreate = (<%= identity %>, options) => {}
module.exports.afterDestroy = (<%= identity %>, options) => {}
module.exports.afterUpdate = (<%= identity %>, options) => {}
module.exports.afterSave = (<%= identity %>, options) => {}
module.exports.afterUpsert = (created, options) => {}

module.exports.afterBulkCreate = (<%= identity %>s, options) => {}
module.exports.afterBulkDestroy = (options) => {}
module.exports.afterBulkUpdate = (options) => {}

module.exports.afterFind = (<%= identity %>s, options) => {}
```

## executor of a hook

```
module.exports.execHook = async (modelName, hookName, ...rest) => {
  if (has(axel, `models.${modelName}.hooks.${hookName}`)) {
    debug('executing hook', `models.${modelName}.hooks.${hookName}`);
    const func = get(axel, `models.${modelName}.hooks.${hookName}`);
    // execute promise
    const output = func(...rest);
    // if it's a promise then wait for it.
    if (output && output.then) {
      await output;
      return null;
    }
    return Promise.resolve(null);
  }
};
```
