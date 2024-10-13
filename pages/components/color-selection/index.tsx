import { Text, View } from "@aws-amplify/ui-react";
import React, { useState } from "react";
import ColorSelection from "../../../components/color-selection";

const ColorSelectionExample: React.FC = () => {
  const [color, setColor] = useState("#ff0000");
  const [outputFormat, setOutputFormat] = useState<"hex" | "rgb">("hex");

  return (
    <View padding="1rem">
      <Text>Selected Color: {color}</Text>
      <View marginTop="1rem">
        <ColorSelection
          value={color}
          onChange={setColor}
          output={outputFormat}
        />
      </View>
      <View marginTop="1rem">
        <Text>Output Format:</Text>
        <select
          value={outputFormat}
          onChange={(e) => setOutputFormat(e.target.value as "hex" | "rgb")}
        >
          <option value="hex">HEX</option>
          <option value="rgb">RGB</option>
        </select>
      </View>
    </View>
  );
};

export default ColorSelectionExample;