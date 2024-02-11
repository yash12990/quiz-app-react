import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Result from "./Result";

const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { option: "A", text: "Punjab" },
      { option: "B", text: "Sikkim" },
      { option: "C", text: "Delhi", correct: true },
      { option: "D", text: "Mumbai" },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { option: "A", text: "London" },
      { option: "B", text: "Paris", correct: true },
      { option: "C", text: "Berlin" },
      { option: "D", text: "Madrid" },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { option: "A", text: "Mars", correct: true },
      { option: "B", text: "Venus" },
      { option: "C", text: "Jupiter" },
      { option: "D", text: "Saturn" },
    ],
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { option: "A", text: "H2O", correct: true },
      { option: "B", text: "CO2" },
      { option: "C", text: "NaCl" },
      { option: "D", text: "NH3" },
    ],
  },
  {
    question: "Who is Prime Minister of India?",
    answers: [
      { option: "A", text: "Donald Trump" },
      { option: "B", text: "Narendra Modi", correct: true },
      { option: "C", text: "Rahul Gandhi" },
      { option: "D", text: "Amit Shah" },
    ],
  },
];

function Questions() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(
    Array(questions.length).fill(false)
  );
  const [selectedOption, setSelectedOption] = useState(null); 

  const handleOptionChange = (correct, option, index) => {
    if (!answeredQuestions[index]) {
      if (correct) {
        const newScore = score + 1;
        setScore(newScore);
      }
      setSelectedOption(option);
      setAnsweredQuestions((prev) => {
        const updatedAnsweredQuestions = [...prev];
        updatedAnsweredQuestions[index] = true;
        return updatedAnsweredQuestions;
      });
    }
  };

  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {currentQuestion < questions.length ? (
        <div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
          <div className="font-bold mb-6 text-lg">
            Question no. {currentQuestion + 1}:
          </div>
          <div className="mb-6">{questions[currentQuestion].question}</div>

          <div className="answer-options">
            <ul>
              {questions[currentQuestion].answers.map((options, index) => (
                <div key={options.option}>
                  <button
                    onClick={() =>
                      handleOptionChange(
                        options.correct,
                        options.option, 
                        currentQuestion
                      )
                    }
                    className={`px-4 py-2 w-full text-left rounded ${
                      selectedOption === options.option
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {options.text}
                  </button>
                </div>
              ))}
            </ul>
          </div>

          <div className="pagination__btn mt-10">
            <Pagination
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              size={questions.length}
            ></Pagination>
          </div>
        </div>
      ) : (
        <Result totalQuestions={questions.length} score={score}></Result>
      )}
    </div>
  );
}
export default Questions;