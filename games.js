var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
function nextSequence(){
    randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern[gamePattern.length-1]);
    pressButton(gamePattern[gamePattern.length-1]);
    level++;
}

$(".btn").click(function(event){
    pressButton(event.target.id);
    userClickedPattern.push(event.target.id);
    
    if(userClickedPattern.length===gamePattern.length){
        if(userClickedPattern.toString()===gamePattern.toString()){
            setTimeout(function(){nextSequence()},1000);
            $("h1").text("Level " + level);
            userClickedPattern = [];
            console.log(gamePattern);
        }
        else{
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("body").addClass("game-over");
            setInterval(function(){
                $("body").removeClass("game-over");
            },200);
            $("h1").text("Game over, press any key to restart");
            gamePattern=[];
            userClickedPattern = [];
            level=0;
        }
    }
    
    
});

$(document).keydown(function(){
    if(level===0){
    nextSequence();
    $("h1").text("Level " + level);
    }
})


function pressButton(button){
    var audio = new Audio("sounds/"+button+".mp3");
    audio.play();
    $("#"+button).addClass("pressed");
    setTimeout(function(){
        $("#"+button).removeClass("pressed");
    },100);}