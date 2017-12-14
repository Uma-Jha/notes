var mongoose = require('mongoose')
var Player = mongoose.model('player')

module.exports = {
  create: function(req, res) {
    player = new Player(req.body);
    player.save(function(err) {
      if(err) {
        console.log("ERROR");
        res.send(err)
      } else {
        console.log("SUCCESS");
        res.send(player);
      }
    })
  },
  index: (request, response) => {
    Player.find({}, function(err, players){
      if(err) {
        response.send(err);
      } else {
        response.send(players);
      }
    })
      
  },
  delete: (req, res) => {
    console.log("DELETE "+req.body._id);
    Player.remove({_id: req.body._id}, function(err){
      if(err) {
        res.send("Error "+err)
      }
      else {
        res.send({"status":"success"})
      }
    });
  },
  update: (req, res) => {
    Player.update({_id: req.body._id }, req.body, function() {
      if(err) {
        res.send("ERROR "+err);
      }
      else {
        res.send("USER UPDATED");
      } 
    });
  }
  /*show: function(req, res) {
  	Player.find({}, function(err, note) {
  		if(err) {
  			res.send('Error occurred');
  		}
  		else {
       
  			res.send(note);
  		}
  	})
  }*/
 }



