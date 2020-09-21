import React from "react";
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";


const FilterArea = ({inputRange, setInputRange, filterByRange}) => {
  return (
    <div>
      <InputRange
        maxValue={10}
        minValue={0}
        value={inputRange}
        onChange={(range) => {
            setInputRange(range);
            filterByRange(range)
        }}
      />
    </div>
  );
};

export default FilterArea;
