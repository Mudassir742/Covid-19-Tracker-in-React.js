import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import "./Charts.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchedDailyData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchedDailyData();
    console.log(dailyData);
  },[]);



  const LineChart = (dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: 'rgba(250,0,0,.2)',
            fill: true,
          },
        ],
      }}
    />
  ) : 'Loading...')

  console.log(dailyData[0]);
  return (
      <div className="chart">
          <section>{LineChart}</section>
      </div>
  )
};

export default Chart;
