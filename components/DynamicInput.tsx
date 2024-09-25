import React, { useState, useEffect } from "react";
import { Input, Text, Flex } from "@aws-amplify/ui-react";

export enum FormFieldType {
  Text = "text",
  Number = "number",
  Date = "date",
  Boolean = "boolean",
  Object = "object",
  List = "list"
}

interface DynamicInputProps {
  data: any;
  path: string;
  onChange: (newData: any) => void;
  label?: string;
  type?: FormFieldType;
}

const DynamicInput: React.FC<DynamicInputProps> = ({ data, path, onChange, label, type = "text" }) => {
  const getValue = (obj: any, path: string): any => {
    try {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    } catch (error) {
      console.error(`Error getting value for path: ${path}`, error);
      return undefined;
    }
  };

  const setValue = (obj: any, path: string, value: any): any => {
    const [head, ...rest] = path.split(".");
    return {
      ...obj,
      [head]: rest.length
        ? setValue(obj[head] || {}, rest.join("."), value)
        : value
    };
  };

  const [inputValue, setInputValue] = useState(getValue(data, path) || "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const value = getValue(data, path);
    setInputValue(value !== undefined ? value : "");
    setError(value === undefined ? `Invalid path: ${path}` : null);
  }, [data, path]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    try {
      const updatedData = setValue(data, path, newValue);
      onChange(updatedData);
      setError(null);
    } catch (error) {
      console.error(`Error setting value for path: ${path}`, error);
      setError(`Unable to set value for path: ${path}`);
    }
  };

  return (
    <Flex direction="column">
      {label && <Text>{label}</Text>}
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder={path}
        type={type}
        hasError={!!error}
      />
      {error && <Text color="red">{error}</Text>}
    </Flex>
  );
};

export default DynamicInput;