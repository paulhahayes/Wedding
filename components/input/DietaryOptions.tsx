import React, { useState } from "react";
import Checkbox from "./Checkbox";
const options = [
  "Lactose intolerance",
  "Gluten intolerance",
  "Vegetarian",
  "Nut allergy",
  "Shellfish allergy",
  "Other",
];

const DietaryOptions = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(false)
  );

  const handleInputChange = (position: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="w-full grid grid-cols-3 gap-4 top-0 mt-2">
      {options.map((option, index) => (
        <div key={index} className="p-0">
          <Checkbox
            label={option}
            isChecked={checkedState[index]}
            setIsChecked={() => handleInputChange(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default DietaryOptions;