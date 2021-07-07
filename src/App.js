import React from "react";
import { Card, Chart, CountryPicker, Logo } from "./components";
import { fetchData } from "./api";
import "./App.css";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const data = this.state.data;

    return (
      <div className="App">
        <Logo />
        <Card data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
