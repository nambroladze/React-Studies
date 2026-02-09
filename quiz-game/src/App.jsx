import { useState } from "react";
import QuizPage from "./components/QuizPage";
import { QUIZ_DATA } from "./quiz-questions";

export default function App() {
  const [questions, setQuestions] = useState(null);

  if (questions !== null) {
    return <QuizPage questions={questions} />;
  }

  function getQuestions(difficulty) {
    setQuestions(QUIZ_DATA.filter((q) => q.difficulty === difficulty));
  }

  return (
    <>
      <h1>Welcome to the Game</h1>
      <button
        onClick={() => {
          getQuestions("Easy");
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          getQuestions("Medium");
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          getQuestions("Hard");
        }}
      >
        Hard
      </button>
    </>
  );
}
