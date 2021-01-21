const routes = require('express').Router();

routes.get('/teste', (request, response) => {
    return response.json({ message: 'Hello Júnior!'})
});

module.exports = routes;