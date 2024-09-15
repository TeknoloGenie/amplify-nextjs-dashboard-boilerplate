import React, { useState } from "react";
import MultiSelectField from "@/components/MultiSelectField";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const MultiSelectFieldExample = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <div>
      <h1>MultiSelectField Example</h1>
      <MultiSelectField
        options={options}
        onChange={handleChange}
        label="Select options"
      />
      <div>
        <h2>Selected Values:</h2>
        <p>{selectedValues.join(", ")}</p>
      </div>
    </div>
  );
};

export default MultiSelectFieldExample;
