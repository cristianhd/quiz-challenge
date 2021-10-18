import { questions } from "./data/questions.js";
import { Game } from "./models/Game.js";
import { UserInterface } from "./models/UserInterface.js";

function render(game,ui){
    if(Game.end()){
        console.log("termine");
    } else {
        UI.displayQuestion(game.currentQuestion.text)
        UI.displayOptions(game.currentQuestion.options,)

    }
}


function main(){
    
    const game = new Game(questions)
    const UI = new UserInterface()

   game.init()
    

    
}

main();