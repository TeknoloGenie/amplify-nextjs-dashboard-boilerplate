import React, { useState, useRef, useEffect } from "react";
import { Flex, CheckboxField, Text, Button, View, Input } from "@aws-amplify/ui-react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectFieldProps {
  options: Option[];
  onChange: (selectedValues: string[]) => void;
  label: string;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({ options, onChange, label }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (value: string) => {
    const updatedSelection = selectedOptions.includes(value)
      ? selectedOptions.filter(item => item !== value)
      : [...selectedOptions, value];
    
    setSelectedOptions(updatedSelection);
    onChange(updatedSelection);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const getSelectedLabels = () => {
    return selectedOptions
      .map(value => options.find(option => option.value === value)?.label)
      .filter(Boolean)
      .join(", ");
  };

  return (
    <Flex direction="column" style={{ position: "relative", overflow: "visible" }} ref={wrapperRef}>
      <Text>{label}</Text>
      <Flex direction="row" alignItems="center">
        <View
          width="100%"
          onClick={toggleOptions}
          style={{ cursor: "pointer" }}
        >
          <Input
            readOnly
            value={getSelectedLabels()}
            placeholder="Select options"
            style={{ cursor: "pointer" }}
          />
        </View>
        <Button onClick={toggleOptions} variation="primary">
          {isOpen ? "▲" : "▼"}
        </Button>
      </Flex>
      <View
        style={{
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          right: 0,
          maxHeight: "200px",
          overflowY: "auto",
          backgroundColor: "var(--amplify-colors-background-secondary)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.2s, visibility 0.2s",
          zIndex: 10,
        }}
      >
        <Flex direction="column" padding="medium">
          {options.map((option) => (
            <CheckboxField
              key={option.value}
              label={option.label}
              name={option.value}
              value={option.value}
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleChange(option.value)}
            />
          ))}
        </Flex>
      </View>
    </Flex>
  );
};

export default MultiSelectField;
