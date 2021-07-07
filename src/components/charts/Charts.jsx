import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import "./Charts.css";

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchedDailyData = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchedDailyData();
  },[setDailyData]);



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



  const BarChart = (
    confirmed ? (<Bar

      data={{
          labels:['Infected','Recovered','Deaths'],
          datasets:[{
            label:'People',
            backgroundColor:['#b900b9','#91EF9C','#F2818D'],
            data:[confirmed.value,recovered.value,deaths.value]
          }]
      }}

      options={{
        legend:{display:true},
        title:{display:true, text:`Current state in ${country}`}
      }}

    />):'Loading...'
  )

 
  return (
      <div className="chart">
          <section>{country ? BarChart :LineChart}</section>
      </div>
  )
};

export default Chart;
