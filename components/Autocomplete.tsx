import React, { useState, useEffect } from "react";
import { Flex, Text, View, Input, Button } from "@aws-amplify/ui-react";

interface AutocompleteProps<T> {
  options: T[];
  displayProperty: keyof T;
  valueProperty: keyof T;
  value: T | null;
  onChange: (value: T | null) => void;
  label?: string;
}

function Autocomplete<T>({
  options,
  displayProperty,
  valueProperty,
  value,
  onChange,
  label
}: AutocompleteProps<T>) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    if (value) {
      setInputValue(String(value[displayProperty]));
    }
  }, [value, displayProperty]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    setIsOpen(true);

    const filtered = options.filter((option) =>
      String(option[displayProperty]).toLowerCase().includes(newInputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option: T) => {
    setInputValue(String(option[displayProperty]));
    onChange(option);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <Flex direction="column" position="relative">
      {label && <Text>{label}</Text>}
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder="Type to search..."
      />
      {isOpen && (
        <View
          position="absolute"
          top="100%"
          left={0}
          right={0}
          backgroundColor="white"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="gray.300"
          borderRadius="md"
          maxHeight="200px"
          overflowY="auto"
          zIndex={1}
        >
          {filteredOptions.map((option, index) => (
            <Button
              key={String(option[valueProperty])}
              onClick={() => handleOptionSelect(option)}
              width="100%"
              justifyContent="flex-start"
              backgroundColor={index % 2 === 0 ? "gray.100" : "white"}
              _hover={{ backgroundColor: "gray.200" }}
            >
              {String(option[displayProperty])}
            </Button>
          ))}
        </View>
      )}
    </Flex>
  );
}

export default Autocomplete;