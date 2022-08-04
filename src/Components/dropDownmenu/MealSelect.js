import React from "react";
import { useState, useEffect } from "react";
import {  useDispatch } from 'react-redux'
import { setMeal } from "../../features/counter/mealSlice";

import Select from "react-select";

const laborOptions = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
];

const customStyles = {
  container: provided => ({
    ...provided,
    width: 180
  })
};

const MealSelect = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.length !== 0) {
      dispatch(setMeal(e.value))
      console.log(e.value)
    }
  };

  return (
    <Select
      onChange={handleChange}
      name="colors"
      options={laborOptions}
      classNamePrefix="select"
      placeholder="Meals per day"
      styles={customStyles}
    />
    
  );
};
export default MealSelect;
