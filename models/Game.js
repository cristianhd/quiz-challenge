export class Game {
  accPrize = 0;
  round = "1";
  currentQuestion = "";

  /**
   *
   * @param {Array<string>} questions
   */

  constructor(questions) {
    this.questions = questions;
  }

  getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  getRandomQuestion(round) {
    return this.filterQuestion(round)[this.getRandomInt(1, 5)];
  }

  filterQuestion(level) {
    return this.questions.filter((question) => question.level === level);
  }

  init() {
    this.currentQuestion = this.getRandomQuestion(this.round);
  }

  end() {
    if (this.round === "5") return true;
    return false;
  }

  checkAnswer(answer){
    if(this.currentQuestion.answer === answer) {
      this.round = parseInt(this.round) + 1;
      this.round = this.round.toString()
      return true
    }
    return false
  }

  leaveGame(){

  }
}
