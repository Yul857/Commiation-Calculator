import React from "react";
import { useState, useEffect } from "react";
import {  useDispatch } from 'react-redux'
import { incrementByAmount } from "../features/counter/counterSlice";

import Select from "react-select";

const laborOptions = [
  { value: "350", label: "Kevin" },
  { value: "450", label: "Rob" },
  { value: "550", label: "Esprenza" },
];

const TagsMultiSelect = () => {
  const [selectedLabor, setselectedLabor] = useState("");
  let total = 0
  const dispatch = useDispatch()
  const handleChange = (e) => {
    if (e.length !== 0) {
      setselectedLabor(e);
    }
  };

  useEffect(() => {
    if (selectedLabor.lenght!==0){
        for (let labors in selectedLabor){
            total += parseInt(selectedLabor[labors].value)
        }
        console.log(total)
        dispatch(incrementByAmount(total))
    }
  }, [selectedLabor]);
  return (
    <Select
      onChange={handleChange}
      isMulti
      name="colors"
      options={laborOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Please select the employees"
    />
    
  );
};
export default TagsMultiSelect;
