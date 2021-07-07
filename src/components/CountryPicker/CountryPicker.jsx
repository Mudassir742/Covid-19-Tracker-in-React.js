import React, { useState, useEffect } from "react";
import { fetchCountryData } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";

import "./CountryPicker.css";

const CountryPicker = ({handleCountryChange}) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchedCountryData = async () => {
      setCountryData(await fetchCountryData());
    };

    fetchedCountryData();
  }, [setCountryData]);

  return (
    <div className="countrypicker">
      <FormControl className="formcontrol" onChange = {(e)=> handleCountryChange(e.target.value)}>
        <NativeSelect defaultValue="">
          <option value="global">Global</option>
          {countryData.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
