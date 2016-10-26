function Player(name, roll, score, total, playing) {
  this.name = name;
  this.roll = roll;
  this.score = score;
  this.total = total;
  this.playing = playing;
  }

Player.prototype.rollDie = function()  {
  this.roll =  Math.floor((Math.random() * 6) +1);
}

Player.prototype.addRollToScore = function() {
  this.score += this.roll;
}

Player.prototype.addScoreToTotal = function() {
  this.total += this.score;
}

Player.prototype.togglePlayer = function() {
  this.playing = !this.playing;
}

Player.prototype.scoreToZero = function() {
  this.score = 0;
}

Player.prototype.checkForWinner = function() {
  if (this.total >= 100) {
  return true;
  } else {
  return false;
  }
}

var player1 = new Player("Adam", 0, 0, 0, true);
var player2 = new Player("eve", 0, 0, 0, false)




$(document).ready(function() {
  $("button#roll").click(function(event) {
    event.preventDefault();
    if (player1.playing === true) {
      $(player1.rollDie());
      if (player1.roll === 1) {
        $(player1.scoreToZero());
        $("#player1Score").text(player1.score);
        $("#player1Roll").text(player1.roll);
        $(player1.togglePlayer());
      } else {
        $(player1.addRollToScore());
        $("#player1Score").text(player1.score);
        $("#player1Roll").text(player1.roll);
      }
    } else {
      $(player2.rollDie());
      if (player2.roll === 1) {
        $(player2.scoreToZero());
        $("#player2Score").text(player2.score)
        $("#player2Roll").text(player2.roll);
        $(player1.togglePlayer());
      } else {
        $(player2.addRollToScore());
        $("#player2Score").text(player2.score);
        $("#player2Roll").text(player2.roll);
      }
    }
  });
  $("button#hold").click(function(event) {
    event.preventDefault();
    $(player1.addScoreToTotal());
    $(player2.addScoreToTotal());
    $(player1.scoreToZero());
    $(player2.scoreToZero());
    $(player1.togglePlayer());
    $("#player1Total").text(player1.total);
    $("#player2Total").text(player2.total);
    if (player1.checkForWinner() === true)
    alert("player1 wins!")
    if (player2.checkForWinner() === true)
    alert("player2 wins!")
  });
});
