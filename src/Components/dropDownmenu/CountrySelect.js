import React from "react";
import { useState, useEffect } from "react";
import {  useDispatch } from 'react-redux'
import { setMilage } from "../../features/counter/MilageSlice";

import Select from "react-select";

const countryOptions = [
  { value: "0.15", label: "US" },
  { value: "0.1", label: "Mexico" },
];

const customStyles = {
  container: provided => ({
    ...provided,
    width: 266
  })
};

const CountrySelect = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.length !== 0) {
      dispatch(setMilage(e.value))
      console.log(e.value)
    }
  };

  return (
    <Select
      onChange={handleChange}
      options={countryOptions}
      classNamePrefix="select"
      placeholder="Select Country"
      styles={customStyles}
    />
    
  );
};
export default CountrySelect;