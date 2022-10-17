class StageOne{
    constructor(info, firstStageInfo, range){
        //a constructor
        this.info = info; //parameter for game title
        this.firstStageInfo = firstStageInfo; //parameter for stage desc
        this.range = range; //parameter for the range
    }
    firstAttempt(){
        //stage one method
        console.log(this.info); 
        console.log(this.firstStageInfo);//logs the current stage of the player into the console
        var trial1 = parseInt(prompt("Enter a number: ")); //prompts the player to guess a number
        var correctGuess = Math.floor(Math.random()*(this.range) + 1); //declares a variable for the randomly generated number

        var point = 0; //declares a variable for point
        if(trial1 == correctGuess){
            point += 1; //increments player's point by 1
            console.log("You guessed right");
            console.log(`---${playerName}, you have ${point} point(s).---`)
            }
        else{
            console.log(`You guessed wrong, try again ${playerName}`)
            playStageOne.firstAttempt(); //repeats stage one trial if player misses the guess
            
        }
    }
  
}

class StageTwo extends StageOne{
    constructor(info, secondStageInfo, range){
        super(info); //inherits info from stage one
        this.secondStageInfo = secondStageInfo;
        this.range = range;
    }
    secondAttempt(){
        //stage two method
        console.log(this.info);
        console.log(this.secondStageInfo);
        var trial2 = parseInt(prompt("Enter a number: "))
        var correctGuess = Math.floor(Math.random()*(this.range) + 1);

        var point = 1;
        if(trial2 == correctGuess){
            point += 1; //increments player's point by 1
            console.log("You guessed right");
            console.log(`---${playerName}, you have ${point} points.---`)
        }
        else{
            console.log(`You guessed wrong, try again ${playerName}`)
            playStageTwo.secondAttempt();
        }
    }


}

var playerName = prompt("Enter your name"); //prompts player to input name
var playStageOne = new StageOne("Guessing Game", `--Hello ${playerName}-- YOU'RE IN STAGE 1--`, 2);
playStageOne.firstAttempt(); //calls the method for first stage
var playStageTwo = new StageTwo("Guessing Game", `--Hello ${playerName}-- YOU'RE IN STAGE 2--`, 3) ;
playStageTwo.secondAttempt(); //calls the method for stage two