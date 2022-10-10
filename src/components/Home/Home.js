import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
import cover from "../Photos/328847-P9ZNJ6-117.jpg";
import Card from "../Card/Card";

const Home = () => {
  const loadTopics = useLoaderData();
  const topics = loadTopics.data;
  return (
    <div>
      <div className=" px-10 mt-10 m-auto md:w-11/12 lg:w-8/12 img-container md:flex lg:pl-60">
        <div>
          <img className="h-64" src={cover} alt="" />
        </div>
        <div className="md:pt-12 ">
          <h1 className="text-2xl text-white font-bold">
            Whats the important of quiz?
          </h1>
          <ul className="text-left mt-2 text-white lg:font-semibold">
            <li>1. It help to embed information in our brains.</li>
            <li>
              2. this provides a foundation for the next stage of learning.
            </li>
            <li>3. It will help to support future, more advanced learning.</li>
            <li>4. It can help to prepare anyone for the next stage.</li>
          </ul>
          <button className="bg-white mt-4 py-2 px-4 rounded-lg hover:bg-indigo-400 font-semibold hover:text-white">
            <Link to="/topics"> Choose Topics</Link>
          </button>
        </div>
      </div>
      <h1 className="text-5xl mt-8">Select Your Topics</h1>
      <div className="card-container">
        {topics.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
<h1>this is home</h1>;
