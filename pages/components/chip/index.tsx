import Chip from "@/components/chip";
import React, { useState } from "react";

const ChipExample: React.FC = () => {
  const [value, setValue] = useState("");
  const options = [{"id": "apple", "label": "apple"}, {"id": "banana", "label": "banana"}, {"id": "cherry", "label": "cherry"}];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Chip Component Example</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Basic Chip</h2>
        <Chip label="Basic Chip" value={value} onChange={setValue} />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Autocomplete Chip</h2>
        <Chip label="Autocomplete Chip" value={value} onChange={setValue} options={options} />
      </div>
    </div>
  );
};

export default ChipExample;