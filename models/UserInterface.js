export class UserInterface {
    constructor(){

    }

    displayQuestion(text) {
        const questionText = document.getElementById("question");
        questionText.innerHTML = text;
      }
    
    displayOptions(options,callback){
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = ""

        for (let i = 0; i < options.length; i++) {
            const button = document.createElement("button");
            button.className = "button";
            button.innerHTML = options[i];
            button.addEventListener("click", () => callback(options[i]))
            
            optionsContainer.append(button)
        }
    }

    displayPrize(accPrize){
        const prizeHTML = `
        <h1>Premio Acumulado</h1>
        <h2 id="prize">Your scores: ${accPrize}</h2>
        `;

        const container = getElementById("container-quiz");
        container.innerHTML = prizeHTML;
    }
}