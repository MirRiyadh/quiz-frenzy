import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { name, total, logo } = card;
  return (
    <div>
      <div className="border-solid border border-neutral-300 m-3 p-5 rounded-lg single-card flex mt-8 bg-gradient-to-r from-purple-500 to-pink-500">
        <img className="h-32 bg-sky" src={logo} alt="" />
        <div className="ml-5 text-white">
          <h1 className="text-2xl font-bold"> {name}</h1>
          <p className="mt-2">
            Total Quiz: <span className="font-bold">{total}</span>{" "}
          </p>
          <button className="mt-5 bg-white hover:bg-violet-500 rounded-lg py-2 px-4 border-solid border border-neutral-300 text-slate-900 font-bold hover:text-white">
            <Link>Start Quiz</Link>{" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
