import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Topics = () => {
  const loadTopics = useLoaderData();
  const topics = loadTopics.data;
  console.log(topics);
  return (
    <div>
      <h1 className="text-5xl mt-8">Select Your Topics</h1>
      <div className="card-container">
        {topics.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Topics;
