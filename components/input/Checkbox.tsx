import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex flex-row gap-2">
      <div>{label}</div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Checkbox;
