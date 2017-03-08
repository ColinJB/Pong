//business logic
var createArray = function(number) {
  var playerArray = [];

  for(var i = 1; i <= number; i++) {
    var replace = "";

    if (i % 15 === 0) {
      replace = "ping-pong";
      playerArray.push(replace);
    } else if (i % 5 === 0) {
      replace = "pong";
      playerArray.push(replace);
    } else if (i % 3 === 0) {
      replace = "ping";
      playerArray.push(replace);
    } else {
      playerArray.push(i);
    }
  }
  return playerArray
}
//user interface logic
$(document).ready(function() {
  $("#input").submit(function(event) {

    $("span#output").empty();

    var playerInput = $("#inputNum").val();
    var playerNum = parseInt(playerInput);

    var newArray = createArray(playerNum);

    var numString = newArray.join(",");

    $("#output").text(numString);
    $("#output").fadeIn();
    event.preventDefault();
  });
});
