---
---

# why

At Enyosolutions, We are fans of sailsjs as a framework for nodejs projects. However over the years we've come accross some issues were painfull :

- Slow startup time (compared to pure express, even express with similar middlewares)
- No nested services / Controllers folders

Also since we don't use waterline and websockets they were unnecessary additions that slowed startup time.
Hence we started this project as an attempt to have a startup template for our projects that would support all the important features we like from sails without the rest (that could be made available in the future via a package).

## Features

- [x] Routes binding to controllers via config
- [x] Merged configuration files
- [x] Globally available axel (with controllers loaded inside)
- [x] Globally available and merged configuration object
- [x] Policies for routes (in route definitions and in policies file)
- [x] Middleware auto wiring
- [ ] Websockets as a plugin
- [x] Nested controllers
- [x] ~~Nested services~~ we are not doing that. it's better to import services, to avoid polluting the global namespace.
- [x] Loading models and wiring an entity manager.
- [x] Connecting to the command line in order to sync models
- [x] Generate bare controllers (connected to the crud controller)
- [ ] Generate mongoose controllers ?
- [ ] Move manager.ejs to axel core, and enable the websocket only if config is enabled
- [ ] rename axel into trex ?
