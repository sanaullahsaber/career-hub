import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Statistics = () => {
  const assignmentMarks = [
    {
      id: 1,
      name: "Assignment 1",
      mark: 57,
    },

    {
      id: 2,
      name: "Assignment 2",
      mark: 57,
    },

    {
      id: 3,
      name: "Assignment 3",
      mark: 60,
    },

    {
      id: 4,
      name: "Assignment 4",
      mark: 53,
    },

    {
      id: 5,
      name: "Assignment 5",
      mark: 39,
    },

    {
      id: 6,
      name: "Assignment 6",
      mark: 54,
    },

    {
      id: 7,
      name: "Assignment 7",
      mark: 60,
    },

    {
      id: 8,
      name: "Assignment 8",
      mark: 60,
    },
  ];
  return (
    <div className="my-container">
      <div className="text-center mt-5 mb-3 text-2xl font-semibold">
        Assignment Marks 
      </div>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart width={1000} height={300} data={assignmentMarks}>
          <Area dataKey="name"></Area>
          <Area stroke="#8884d8" dataKey="mark"></Area>
          <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
