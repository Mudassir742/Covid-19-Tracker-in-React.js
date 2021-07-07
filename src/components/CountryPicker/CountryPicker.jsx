import React, { useState, useEffect } from "react";
import { fetchCountryData } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";

import "./CountryPicker.css";

const CountryPicker = () => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchedCountryData = async () => {
      setCountryData(await fetchCountryData());
    };

    fetchedCountryData();
    console.log(countryData);
  }, [setCountryData]);

  return (
    <div className="countrypicker">
      <FormControl className="formcontrol">
        <NativeSelect>
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
