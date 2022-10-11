import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Option from "../QuizItems/Option/Option";
import { click } from "@testing-library/user-event/dist/click";
import { toast } from "react-toastify";

const QuizOptions = ({ quizQuestion }) => {
  const { id, question, options, correctAnswer } = quizQuestion;

  const ShowAns = () => {
    toast.info(`Correct Ans: ${correctAnswer}`, { autoClose: 1500 });
  };

  const handleQuiz = (option) => {
    if (correctAnswer === option) {
      toast.success("Correct Answer", { autoClose: 1000 });
    } else {
      toast.error("Worng Answer", { autoClose: 1000 });
    }
  };
  return (
    <div className="m-4 bg-red-400 py-4">
      <div className="flex justify-between items-center px-3">
        <h3>Quiz: {question}</h3>
        <button onClick={ShowAns}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>
      <div className="md:text-left mx-4">
        {options.map((option, idx) => (
          <Option option={option} key={idx} handleQuiz={handleQuiz}></Option>
        ))}
      </div>
    </div>
  );
};

export default QuizOptions;
