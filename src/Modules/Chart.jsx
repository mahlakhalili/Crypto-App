import React from "react";
import styles from "./Chart.module.css";
import { convertData } from "../helpers/convertData";
import { useState } from "react";
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

const Chart = ({ chart, setChart }) => {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <chartComponent data={convertData(chart, type)} type={type} />
        </div>
      </div>
    </div>
  );
};

export default Chart;

const chartComponent = ({ data, type }) => {
  return;
  <ResponsiveContainer width="100%" height="100%">
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px" />
      <CartesianGrid stroke="#404042" />
      <YAxis dataKey={type} domain={["auto", "auto"]} />
      <XAxis dataKey="date" />
      <Legend />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>;
};
