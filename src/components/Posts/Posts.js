import React from "react";
import "./Posts.css";

const Posts = ({ posts }) => {
  const { id, qus, ans } = posts;
  return (
    <div className="md:w-9/12 p-5 m-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 my-4 text-white rounded-lg box-shadow">
      <h1 className="text-xl font-bold">
        Q{id}-{qus}
      </h1>
      <p>{ans}</p>
    </div>
  );
};

export default Posts;
