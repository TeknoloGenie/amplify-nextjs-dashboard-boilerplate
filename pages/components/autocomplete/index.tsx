import Autocomplete from "@/components/autocomplete";
import { useState } from "react";

const options = [
  { id: "1", name: "Option 1" },
  { id: "2", name: "Option 2" },
  { id: "3", name: "Option 3" },
  { id: "4", name: "Option 4" },
];

const AutocompleteExample = () => {
  const [selectedValue, setSelectedValue] = useState<typeof options[0] | null>(null);

  const handleChange = (value: typeof options[0] | null) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <Autocomplete
        options={options}
        displayProperty="name"
        valueProperty="id"
        value={selectedValue}
        onChange={handleChange}
        label="Select an option"
      />
      <div>
        <h2>Selected Value:</h2>
        <p>{selectedValue ? JSON.stringify(selectedValue) : "None"}</p>
      </div>
    </div>
  );
};

export default AutocompleteExample;