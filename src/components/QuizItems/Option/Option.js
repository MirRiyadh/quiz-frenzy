import React from "react";

const Option = ({ option, handleQuiz }) => {
  return (
    <div className="my-4 ">
      <button
        onClick={() => handleQuiz(option)}
        className="bg-white py-2 px-4 border border-stone-400 rounded-md hover:bg-cyan-400 font-semibold hover:text-white md:w-80 "
      >
        {option}
      </button>
    </div>
  );
};

export default Option;
