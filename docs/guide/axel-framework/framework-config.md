---
---

# Framework Config

```

module.exports.framework = {
  automaticApi: true, // automatically connect database models to api enpoints those routes are overriden by any api you define
  automaticApiPrefix: '/api/admin', // automatically connect database models to api enpoints,
  automaticApiBlacklistedModels: ['user'],
  automaticApiSecurityPolicy: 'isAdmin',
  validateDataWithJsonSchema: true,
  primaryKey: 'id', // '_id'
  primaryColor: '#51D6BC',
  secondaryColor: '#FF736E',
  backgroundColor: '#fff',
  user: {
    emailConfirmationRequired: false,
    publicId: true,
    username: false,
    email: true,
    accountManualVerification: false,
  },
  roles: {
    USER: { inherits: [] }, // can access the app
    BO: { inherits: ['USER'] }, // can access the ADMIN
    ADMIN: { inherits: ['BO'] },
    SUPERADMIN: { inherits: ['ADMIN'] },
  },
  rolesWithAccessToBackoffice: ['ADMINPANEL','ADMIN', 'SUPERADMIN'],
  defaultPagination: 100,
  defaultLovPagination: 1000,
  axelAdmin: {
    enabled: true,
    editableModels: false,
  },
  axelManager: true,
  defaultApiSearchMode: 'exact', // defines how search parameters will be resolved by default => exact | start || full || wildcards
  responseFormat: {
      page: 0,
      perPage: 20,
      totalCount: 0,
      previous: '',
      next: '',
    body: [],
  },
  errorResponseFormat: {
    errors: ['error_codes'],
    message: 'error message',
  },
};


```

# folder structure

## src

### api
