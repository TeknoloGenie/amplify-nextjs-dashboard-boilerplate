import { View } from "@aws-amplify/ui-react";
import React from "react";
import DynamicForm from "../dynamic-form";
import Table from "../table";

interface PanelProps {
  id: string;
  title: string;
  minWidth: string;
  minHeight: string;
  location?: {
    neighbor: string;
    position: "below" | "nextto";
  };
  children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ id, title, minWidth, minHeight, children }) => {
  return (
    <View
      as="div"
      id={id}
      className={`${minWidth} ${minHeight}`}
      backgroundColor="var(--amplify-colors-background-secondary)"
      padding="1rem"
      borderRadius="medium"
    >
      <View as="h2" marginBottom="1rem" fontSize="xl" fontWeight="bold">
        {title}
      </View>
      <View as="div" className="panel-body">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child.type === Table || child.type === DynamicForm)) {
            return child;
          }
          return null;
        })}
      </View>
    </View>
  );
};

export default Panel;