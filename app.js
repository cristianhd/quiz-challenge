import { questions } from "./data/questions.js";
import { Game } from "./models/Game.js";
import { UserInterface } from "./models/UserInterface.js";

function render(game,ui){
    if(game.end() || game.leaveGame()){
        console.log("termine");
    } else {
        console.log(game.currentQuestion);
        ui.displayQuestion(game.currentQuestion.text)
        ui.displayOptions(game.currentQuestion.options,(answer)=>{
            game.checkAnswer(answer);
            render(game,ui)
        })

    }
}


function main(){
    
    const game = new Game(questions)
    const ui = new UserInterface()

   game.init()

   render(game,ui);
    

    
}

main();