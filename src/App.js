import React from "react";
import { Card, Chart, CountryPicker, Logo } from "./components";
import { fetchData } from "./api";
import "./App.css";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {

    if(country==="global")
    {
      const fetchedData = await fetchData();
      this.setState({data: fetchedData , country:""})
    }
    else
    {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
    }
  };

  render() {
    const {data,country} = this.state;

    return (
      <div className="App">
        <Logo />
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
