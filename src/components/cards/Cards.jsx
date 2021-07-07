import React from "react";
import CountUp from "react-countup";

import "./Cards.css";

const Card = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="main">
      <section className="card-container">
        <div className="card" id="card1">
          <h3>Infected</h3>
          <h2>
            <CountUp
              start={0}
              end={confirmed.value}
              duration={3}
              separator=","
            />
          </h2>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <p>Number of active cases of COVID-19</p>
        </div>
        <div className="card" id="card2">
          <h3>Recovered</h3>
          <h2>
            <CountUp
              start={0}
              end={recovered.value}
              duration={3}
              separator=","
            />
          </h2>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <p>Number of recovered cases of COVID-19</p>
        </div>
        <div className="card" id="card3">
          <h3>Deaths</h3>
          <h2>
            <CountUp start={0} end={deaths.value} duration={3} separator="," />
          </h2>
          <div>{new Date(lastUpdate).toDateString()}</div>
          <p>Number of deaths due to COVID-19</p>
        </div>
      </section>
    </div>
  );
};

export default Card;
