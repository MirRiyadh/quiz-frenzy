import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Option from "../QuizItems/Option/Option";
import { click } from "@testing-library/user-event/dist/click";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizOptions = ({ quizQuestion }) => {
  const { id, question, options, correctAnswer } = quizQuestion;

  const ShowAns = () => {
    alert(correctAnswer);
  };

  const handleQuiz = (option) => {
    if (correctAnswer === option) {
      toast.success("are you happy", 500);
    } else {
      alert("worng");
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
