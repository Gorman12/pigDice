function Player(name, score, totalScore) {
  this.name = name;
  this.score = score;
  this.totalScore = totalScore;

  Player.prototype.roll = function() {
   this.score= (Math.floor(Math.random() * 6) +1);
}

    var totalScore = this.score += this.score;

}


$(document).ready(function() {
  $("#roll-button").click(function(event) {
    event.preventDefault();
    $('#user-score').append(" ");
      console.log("what are you doing");









});
});
