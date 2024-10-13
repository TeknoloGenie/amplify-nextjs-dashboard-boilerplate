import DynamicComponent from "@/components/dynamic-component";
import { Flex, Heading } from "@aws-amplify/ui-react";
import React from "react";

const DynamicComponentExample: React.FC = () => {
  return (
    <Flex direction="column" gap="1rem">
      <Heading level={2}>Dynamic Component Example</Heading>

      <DynamicComponent
        options={{
          component: "Image",
          props: {
            alt: "Alternate description...",
            className: "w-100 flex",
            src: "https://docs.amplify.aws/assets/logo-dark.svg",
          },
        }}
      />

      <DynamicComponent
        options={{
          component: "Tabs",
          props: {
            justifyContent: "flex-start",
            defaultValue: "Tab 1",
            items: [
              { label: "Tab 1", value: "Tab 1", content: "Tab content #1" },
              { label: "Tab 2", value: "Tab 2", content: "Tab content #2" },
              { label: "Disabled tab", value: "Tab 3", content: "Tab content #3", isDisabled: true },
            ],
          },
        }}
      />

      <DynamicComponent
        options={{
          component: "Flex",
          props: { direction: "column", gap: "1rem" },
          children: [
            {options:{
              component: "TextField",
              props: { label: "Name", placeholder: "Enter your name" },
            }},
            {options:{
              component: "SelectField",
              props: {
                label: "Country",
                placeholder: "Select your country",
                options: ["USA", "Canada", "UK", "Australia"],
              },
            }},
            {options:{
              component: "Button",
              props: { children: "Submit" },
            }},
          ],
        }}
      />
    </Flex>
  );
};

export default DynamicComponentExample;