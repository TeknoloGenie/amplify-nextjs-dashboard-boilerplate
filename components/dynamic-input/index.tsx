import { Flex, Input, SwitchField, Text } from "@aws-amplify/ui-react";
import React, { useCallback, useEffect, useState } from "react";

export enum FormFieldType {
  Text = "text",
  Number = "number",
  Date = "date",
  Boolean = "boolean",
  Object = "object",
  List = "list"
}

interface DynamicInputProps {
  id?: string;
  data: any;
  path: string;
  onChange: (newData: any) => void;
  label?: string;
  type?: string;
}

const DynamicInput: React.FC<DynamicInputProps> = ({ data, path, onChange, label, type = "text" }) => {
  const getValue = useCallback((obj: any, path: string): any => {
    try {
      const value = path.split(".").reduce((acc, part) => acc && acc[part], obj);
      
      // Handle different types based on the FormFieldType
      if (type === FormFieldType.Number) {
        const numberValue = parseFloat(value);
        return isNaN(numberValue) ? null : numberValue;
      } else if (type === FormFieldType.Boolean) {
        if (typeof value === "boolean") {
          return value;
        }
        return value === "true" ? true : false;
      } else if (type === FormFieldType.Date) {
        const dateValue = new Date(value);
        return isNaN(dateValue.getTime()) ? null : dateValue;
      } else if (type === FormFieldType.Text) {
        return value;
      }
      
      // Default case
      return value;
    } catch (error) {
      console.error(`Error getting value for path: ${path}`, error);
      return undefined;
    }
  }, [type]);

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
  }, [data, path, getValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue;
    if (type === FormFieldType.Number) {
      const numberValue = parseFloat(event.target.value);
      if (isNaN(numberValue)) {
        setError("Invalid number value");
        return;
      }
      newValue = numberValue;
    } else if (type === FormFieldType.Boolean) {
      newValue = event.target.checked;
    } else if (type === FormFieldType.Date) {
      const dateValue = new Date(event.target.value);
      if (isNaN(dateValue.getTime())) {
        setError("Invalid date value");
        return;
      }
      newValue = dateValue;
    } else {
      newValue = event.target.value;
    }
  
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
      {type === FormFieldType.Boolean ? (
        <SwitchField label={label} isChecked={inputValue} onChange={handleChange} />
      ) : null}
      {(type === FormFieldType.Text || type === FormFieldType.Number) ? (
        <>
          {label && <Text>{label}</Text>}
          <Input
            value={inputValue}
            onChange={handleChange}
            placeholder={path}
            type={type}
            hasError={!!error}
          />
          {error && <Text color="red">{error}</Text>}
        </>
      ) : null}
    </Flex>
  );
};

export default DynamicInput;