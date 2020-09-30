const router = require('express').Router();

const routes = ['users', 'sessions', 'products'];

for (let route of routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
