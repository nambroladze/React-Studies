import { useState } from "react";

export default function QuizPage({ questions }) {
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const currentQuestionData = questions[index];

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
    }, 2000);
  };

  if (index === questions.length) {
    return <div>You finished the quiz</div>;
  }

  return (
    <>
      <h1>{currentQuestionData.question}</h1>
      {currentQuestionData.answers.map((answer, index) => {
        let className = "";

        if (index === selectedAnswerIndex) {
          if (index === currentQuestionData.correct) {
            className = "correct";
          } else {
            className = "wrong";
          }
        }

        return (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={className}
          >
            {answer}
          </button>
        );
      })}
    </>
  );
}
