import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Option from "../QuizItems/Option/Option";
import { click } from "@testing-library/user-event/dist/click";
import { toast } from "react-toastify";
import "./QuizOptions.css";

const QuizOptions = ({ quizQuestion }) => {
  const { id, question, options, correctAnswer } = quizQuestion;

  const ShowAns = () => {
    toast.info(`Correct Ans: ${correctAnswer}`, { autoClose: 2000 });
  };

  const handleQuiz = (option) => {
    if (correctAnswer === option) {
      toast.success("Correct Answer", { autoClose: 1200 });
    } else {
      toast.error("Worng Answer. Try Again!", { autoClose: 1200 });
    }
  };
  return (
    <div className="quiz-container m-4 md:m-8 py-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg">
      <div className="flex justify-center items-center px-3 ">
        <h3 className="font-semibold text-slate-800 mr-10"> {question}</h3>
        <button onClick={ShowAns}>
          <FontAwesomeIcon
            icon={faEye}
            className="text-rose-600 h-5 hover:text-emerald-500"
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className="md:text-left md:w-80 m-auto">
        {options.map((option, idx) => (
          <Option
            option={option}
            key={idx}
            handleQuiz={handleQuiz}
            correctAnswer={correctAnswer}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default QuizOptions;
