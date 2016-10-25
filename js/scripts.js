function roll(min, max) {
  return (Math.floor(Math.random() * 6) +1);
}

function add(total, roll) {
  return (total + roll);
}
var total = 0;

$(document).ready(function() {
  $("#roll-button").click(function() {

    $("#user-score").append(total)

});
});
