---
---

# Services

===========

Services are basically Files that contain whatever code you need to reuse in parts of the application.
For convenience the tmeplate already comes with the following serviecs :

```bash
ActivityLogService.js # Generate a diff between two objects, that can be used to feed a changelog or an history.
common
  logger.js # Creates a pino logger that can be used in the app
  MailService.js # Create a Mailing service that can be used to send mail.
  RolesService.js # Create a class for managing roles
  SequelizeHooks.js ## A service for storing various usefull hooks for sequelize
  SwaggerService.js # A service to serve swagger files
  Utils.js # Utility class
CronService.js # a serivce for creating cron tasks
FacebookAuthService.js # Facebook login service
GoogleAuthService.js # Google login service
I18n.js  # Translation service
Statistics.js  # Service for creating stats sql requests
```
