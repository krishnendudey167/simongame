var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var keyPress = false
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour)
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio('./sounds/' + randomChosenColour + '.mp3')
    audio.play().catch(error => console.log(error));
}
nextSequence()
