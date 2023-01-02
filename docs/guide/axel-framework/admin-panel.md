---
---

# Admin panel

# Activate

The admin panel can be activated and configured in the plugins section of the backoffice configuration.
By default the Admin is served at the `/admin-panel` url. You can redirect any route to that url.

# Config

The admin panel can be activated and configured in the plugins section of the backoffice configuration.

```js
  admin: {
    enabled: true,
    config: {
      // this config if available publicly in the admin. Do no add any secrets here..
      userModelName: 'user', // The name to use to access the users model
      useNestedModels: false, // show nested models in admin
      useApiEndpoints: false, // use api endpoints defined by the user in admin
      rolesWithAccessToBackoffice: ['ADMINPANEL', 'ADMIN', 'SUPERADMIN'],
      location: '' // absolute path of the admin panel. Useful when you eject the backoffice.
    }
  },
```
