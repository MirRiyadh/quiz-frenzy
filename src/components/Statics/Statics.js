import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Statics.css";

const Statics = () => {
  const loadData = useLoaderData();
  const data = loadData.data;

  return (
    <div className="pb-20 md:pb-80">
      <h1 className="text-5xl my-5 underline">Recharts</h1>
      <div className="md:flex justify-center lg:w-7/12 m-auto">
        <div className=" lg:w-8/12 mt-5 bg-sky-100 p-5">
          <LineChart className="linechart" width={340} height={180} data={data}>
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
          <p className="mt-2 font-bold">x-axis: name & y-axis: total</p>
        </div>
        <div className="ml-4 text-left">
          <h1 className="text-xl font-bold mb-3">Importance of Charts</h1>
          <ul>
            <ol>1. Provide a visual representation of data</ol>
            <ol>2. Effectively clarify information.</ol>
            <ol>3. Represent many different types of data.</ol>
            <ol>4. Make important trends easily recognizable.</ol>
            <ol>5. Allow users to perceive information quickly.</ol>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Statics;
