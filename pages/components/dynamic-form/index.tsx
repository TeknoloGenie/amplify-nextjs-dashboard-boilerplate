import { Schema } from "@/amplify/data/resource";
import DynamicForm from "@/components/dynamic-form";
import { FormFieldType } from "@/components/dynamic-input";
import { Button, Flex, Heading, Text } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { useState } from "react";

const client = generateClient<Schema>();

const DynamicFormExample: React.FC = () => {
  const [data, setData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "000000000000",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    country: "USA",
    title: "Mr.",
  });

  const options = {
    firstName: { type: FormFieldType.Text, label: "First Name" },
    lastName: { type: FormFieldType.Text, label: "Last Name" },
    email: { type: FormFieldType.Text, label: "Email" },
    phoneNumber: { type: FormFieldType.Text, label: "Phone" },
    address: { type: FormFieldType.Text, label: "Address" },
    city: { type: FormFieldType.Text, label: "City" },
    state: { type: FormFieldType.Text, label: "State" },
    zipCode: { type: FormFieldType.Text, label: "Zip Code" },
    country: { type: FormFieldType.Text, label: "Country" },
    title: { type: FormFieldType.Text, label: "Title" },
  };

  const handleChange = (newData: React.SetStateAction<any>) => {
    setData(newData);
  };

  return (
    <Flex direction="column" gap="1rem">
      <Heading level={2}>Contact Form Example</Heading>
      
      <DynamicForm
        data={data}
        onChange={handleChange}
        options={options}
        model={client.models.Contact}
      />
      
      <Button onClick={() => console.log(data)}>Log Current Data</Button>
      
      <Heading level={3}>Current Data:</Heading>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </Flex>
  );
};

export default DynamicFormExample;
