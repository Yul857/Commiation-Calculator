import React from "react";
import { useState, useEffect } from "react";

import Select from "react-select";
const laborOptions = [
  { value: "350", label: "Kevin" },
  { value: "450", label: "Rob" },
  { value: "550", label: "Esprenza" },
];

const TagsMultiSelect = () => {
  const [selectedLabor, setselectedLabor] = useState("");
  const [totalLabor, setTotalLabor] = useState(0)
  let total = 0
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
        setTotalLabor(total)
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
