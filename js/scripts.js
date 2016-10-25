function Player(name, roll, score, total, playing) {
  this.name = name;
  this.roll = roll;
  this.score = score;
  this.total = total
  this.playing = playing;
  }

Player.prototype.rollDie = function()  {
     this.roll =  Math.floor((Math.random() * 6) +1);
}

Player.prototype.addRollToScore = function() {
    if (this.roll === 1) {
      this.score === 0;
      this.playing === false;
    } else
      this.score += this.roll;

Player.prototype.addToTotal = function() {
  this.total += this.score;
}





var player1 = new Player("Adam", 0, 0, 0, true);
var player2 = new Player("Eve", 0, 0, 0, false);




$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    if (player1.playing === true) {
      $(player1.rollDie());
      $(player1.addRollToScore());
        if (player1.playing === false) {
          $(player1.addToTotal());
          $("#player1Score").text(player1.total);
        }
    } else {
      $(player2.rollDie());
      $(player2.addRollToScore());
      if (player2.playing === false) {
        $(player2.addToTotal());
        $("#player2").text(player2.total)
      }
    }
  });

  $("button#hold").click(function(event) {
    event.preventDefault();
    if (player1.playing === true) {
      $(player1.addToTotal());
      $(player1.playing === false);
      $("#player1Score").text(player1.total)
    }else {
      $(player2.addToTotal())
      $(player2.playing === false);
      $("#player2Score").text(player2.total);
    }
  });
});
