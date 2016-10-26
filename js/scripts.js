function Player(name, roll, score, playing) {
  this.name = name;
  this.roll = roll;
  this.score = score;
  this.playing = playing;
  }

Player.prototype.rollDie = function()  {
     this.roll =  Math.floor((Math.random() * 6) +1);
}

Player.prototype.addRollToScore = function() {
      this.score += this.roll;
    }

var player1 = new Player("Adam", 0, 0, true);





$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    if (player1.playing === true) {
      $(player1.rollDie());
      $(player1.addRollToScore());
      alert(player1.score);
    }
  });
});


//   $("button#hold").click(function(event) {
//     event.preventDefault();
//
//   // var player1 = new Player("Adam", 0, 0, 0, true);
//   // var player2 = new Player("Eve", 0, 0, 0, false);
//
//     if (player1.playing === true) {
//       $(player1.addToTotal());
//       $(player1.playing === false);
//       $("#player1Score").text(player1.total)
//     }else {
//       $(player2.addToTotal())
//       $(player2.playing === false);
//       $("#player2Score").text(player2.total);
//     }
//   });
// });
