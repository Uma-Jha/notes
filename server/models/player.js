var mongoose = require('mongoose');
var playerSchema = new mongoose.Schema({
 name: {type: String, required: true},
 position: String, game1: false, game2: false, game3: false
});
mongoose.model('player', playerSchema); 