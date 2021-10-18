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
    return this.filterQuestion(round)[this.getRandomInt(1, 6)];
  }

  filterQuestion(level) {
    return this.questions.filter((question) => question.level === level);
  }

  init() {
    this.currentQuestion = this.getRandomQuestion(this.round);
  }

  end() {
    if (round === "5") return true;
    return false;
  }
}
