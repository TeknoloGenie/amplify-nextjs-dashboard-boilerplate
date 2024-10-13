import DynamicInput, { FormFieldType } from "@/components/dynamic-input";
import { Flex, Heading, Text } from "@aws-amplify/ui-react";
import React, { useState } from "react";

const DynamicInputExample: React.FC = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    birthday: "1990-01-01",
    settings: {
      timezone: "UTC",
      notifications: {
        email: true,
        sms: false,
      },
    },
  });

  const handleChange = (newData: any) => {
    setUser(newData);
  };

  return (
    <Flex direction="column" gap="1rem">
      <Heading level={2}>Dynamic Input Example</Heading>
      
      <DynamicInput
        data={user}
        path="name"
        onChange={handleChange}
        label="Name"
      />
      
      <DynamicInput
        data={user}
        path="email"
        onChange={handleChange}
        label="Email"
        type={FormFieldType.Text}
      />
      
      <DynamicInput
        data={user}
        path="birthday"
        onChange={handleChange}
        label="Birthday"
        type={FormFieldType.Date}
      />
      
      <DynamicInput
        data={user}
        path="settings.timezone"
        onChange={handleChange}
        label="Timezone"
      />
      
      <DynamicInput
        data={user}
        path="settings.notifications.email"
        onChange={handleChange}
        label="Email Notifications"
        type={FormFieldType.Boolean}
      />
      
      <Heading level={3}>Current User Data:</Heading>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </Flex>
  );
};

export default DynamicInputExample;