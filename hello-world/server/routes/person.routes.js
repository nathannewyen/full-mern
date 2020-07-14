const PersonController = require('../controllers/personal.controllers')

module.exports = function (app) {
    app.get('/api', PersonController.index)
}