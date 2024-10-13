import * as UI from "@aws-amplify/ui-react";
import React from "react";
import { AmplifyUIComponentType } from "../types";

export interface DynamicComponentProps {
  options: {
    component: AmplifyUIComponentType;
    props: Record<string, any>;
    children?: DynamicComponentProps[];
  };
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ options }) => {
  const { component, props, children } = options;
  
  // Check if the component exists in Amplify UI
  if (!(component in UI)) {
    console.error(`Component ${component} not found in Amplify UI`);
    return null;
  }

  const Component = UI[component as keyof typeof UI] as React.ComponentType<any>;

  // Render children if they exist
  const renderedChildren = children?.map((child, index) => (
    <DynamicComponent key={index} {...child} />
  ));

  return <Component {...props}>{renderedChildren}</Component>;
};

export default DynamicComponent;