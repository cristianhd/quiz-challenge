import { data } from "./data.js";
import { Question } from "../models/Question.js";

export const questions = data.map(
  (question) =>
    new Question(
      question.text,
      question.level,
      question.options,
      question.answer
    )
);
