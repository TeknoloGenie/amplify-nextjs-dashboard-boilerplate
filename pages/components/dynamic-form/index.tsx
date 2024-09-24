import React, { useState } from "react";
import { Flex, Heading, Text, Button } from "@aws-amplify/ui-react";
import DynamicForm from "../../../components/DynamicForm";

// Mock model for demonstration purposes
const MockModel = {
  // Add necessary model methods here
};

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
    age: { type: "number", label: "Age" },
    birthdate: { type: "date", label: "Date of Birth" },
    isStudent: { type: "boolean", label: "Student Status" },
  };

  const resource = {
    fields: {
      name: { type: "text" },
      age: { type: "number" },
      email: { type: "text" },
      birthdate: { type: "date" },
      isStudent: { type: "boolean" },
      address: {
        type: "object",
        fields: {
          street: { type: "text" },
          city: { type: "text" },
          country: { type: "text" },
        },
      },
    },
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
        resource={resource}
        model={MockModel}
      />
      
      <Button onClick={() => console.log(data)}>Log Current Data</Button>
      
      <Heading level={3}>Current Data:</Heading>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </Flex>
  );
};

export default DynamicFormExample;