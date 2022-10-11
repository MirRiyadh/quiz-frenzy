import React from "react";

const Option = ({ option, handleQuiz }) => {
  return (
    <div className="my-4">
      <button
        onClick={() => handleQuiz(option)}
        className="bg-white py-2 px-2 border border-stone-800 rounded-md"
      >
        {option}
      </button>
    </div>
  );
};

export default Option;
