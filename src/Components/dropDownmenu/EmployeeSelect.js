import React from "react";
import { useState, useEffect } from "react";
import {  useDispatch } from 'react-redux'
import { incrementByAmount } from "../../features/counter/counterSlice";

import Select from "react-select";

const laborOptions = [
  { value: "Kevin", label: "Kevin" },
  { value: "Rob", label: "Rob" },
  { value: "Esperanza", label: "Esperanza" },
  { value: "Alberto", label: "Alberto" },
  { value: "Masao", label: "Masao" },
];

let wage = {
  "Rob":350,
  "Kevin":420,
  "Esperanza": 100,
  "Masao": 200,
  "Alberto": 200,
}

const customStyles = {
  container: provided => ({
    ...provided,
    width: 266
  })
};

const EmployeeSelect = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.length !== 0) {
      let laborTotal = 0
      for (let employees in e){
        laborTotal += wage[e[employees].value]
      }
      dispatch(incrementByAmount(laborTotal))
    }
  };

  return (
    <Select
      onChange={handleChange}
      isMulti
      name="colors"
      options={laborOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Please select the employees"
      styles={customStyles}
    />
    
  );
};
export default EmployeeSelect;
