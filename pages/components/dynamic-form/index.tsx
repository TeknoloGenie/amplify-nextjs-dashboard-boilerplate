import DynamicForm from "@/components/dynamic-form";
import { FormFieldType } from "@/components/dynamic-input";
import { Button, Flex, Heading, Text } from "@aws-amplify/ui-react";
import React, { useState } from "react";


// Mock model for demonstration purposes

const DynamicFormExample: React.FC = () => {
  const [data, setData] = useState({
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    birthdate: "1990-01-01",
    isStudent: true,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA",
    },
  });

  const options = {
    age: { type: FormFieldType.Number, label: "Age" },
    birthdate: { type: FormFieldType.Date, label: "Date of Birth" },
    isStudent: { type: FormFieldType.Boolean, label: "Student Status" },
  };

  const handleChange = (newData: any) => {
    setData(newData);
  };

  return (
    <Flex direction="column" gap="1rem">
      <Heading level={2}>Dynamic Form Example</Heading>
      
      <DynamicForm
        data={data}
        onChange={handleChange}
        options={options}
        model={MockModel}
      />
      
      <Button onClick={() => console.log(data)}>Log Current Data</Button>
      
      <Heading level={3}>Current Data:</Heading>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </Flex>
  );
};

export default DynamicFormExample;