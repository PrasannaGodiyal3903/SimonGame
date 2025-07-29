var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
function nextSequence(){
    level++;
    $("h1").text("Level "+ level);
    var x=Math.random()*4;
    var randomNumber=Math.floor(x);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
       
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
       var sound=new Audio("sounds/"+randomChosenColour+".mp3");
         sound.play();
    
        
}

$(document).one("keydown",function(){
        nextSequence();
});

$(".btn").on("click",function(){
         var clickedColour=$(this).attr("id");
        
         userClickedPattern.push(clickedColour);
         var currentLevel = userClickedPattern.length - 1;
         $("#"+clickedColour).fadeOut(100).fadeIn(100);
         var sound=new Audio("sounds/"+clickedColour+".mp3");
         sound.play();
         var currentLevel = userClickedPattern.length - 1;
         checkAnswer(currentLevel);
    });
function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(nextSequence,1000);
            userClickedPattern=[];
        }
   }
   else{
    console.log("wrong");
    var wrongSound = new Audio("sounds/wrong.mp3");
wrongSound.play();
$("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over",200);
    });
    $("h1").text("Press any key to restart");
    gamePattern=[];
    userClickedPattern=[];
    level=0;
    $(document).one("keydown",function(){
        nextSequence();
});
   }

}

    