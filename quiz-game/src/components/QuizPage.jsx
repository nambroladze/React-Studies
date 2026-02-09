import { useState } from "react";

export default function QuizPage({ questions }) {
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isLcoked, setIsLcoked] = useState(false);

  const currentQuestionData = questions[index];

  const handleAnswerClick = (index) => {
    setSelectedAnswerIndex(index);
    setIsLcoked(true);

    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setIsLcoked(false);
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
            disabled={isLcoked}
          >
            {answer}
          </button>
        );
      })}
    </>
  );
}
