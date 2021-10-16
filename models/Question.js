export class Question {
    constructor(text,level,options,answer){
        this.text = text
        this.level = level
        this.options = options
        this.answer = answer
    }

    getLevel(){
        return this.level;
    }

}