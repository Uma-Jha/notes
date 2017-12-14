var playersController = require('./../controllers/players.js');

module.exports = function(app) {
app.get('/players', playersController.index);
app.post('/players', playersController.create);
app.post('/players/delete', playersController.delete);
app.post('/players/update', playersController.update);
}
