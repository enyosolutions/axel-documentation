---
---

# Cannot connect to the admin

## Symptom

- error_forbidden_access_to_bo : Your account is not allowed to connect to the backoffice. Please contact an admin

## why

This happens because while the user is authenticated, he doesn't have any of the roles that would allow him to access the admin panel.
This can be fixed :

- by adding the missing rights to the user. The list of rights needed for admin access can be found in `src/config/plugins.js` => `admin.config.rolesWithAccessToBackoffice`.
- by changing the rights needed to access the BO. The list of rights can be set up in `src/config/plugins.js` => `admin.config.rolesWithAccessToBackoffice`.

### examples

```json
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
  }
```
