export class Question {

    /**
     * 
     * @param {string} text 
     * @param {string} level 
     * @param {string} options 
     * @param {string} answer 
     */

    constructor(text,level,options,answer){
        this.text = text;
        this.level = level;
        this.options = options;
        this.answer = answer;
    }

    getLevel(){
        return this.level;
    }

}