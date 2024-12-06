import { View } from "@aws-amplify/ui-react";
import React from "react";
import Panel from "../panel";

interface PanelConfig {
  id: string;
  title: string;
  minWidth: string;
  minHeight: string;
  location?: {
    neighbor: string;
    position: "below" | "nextto";
  };
  content: React.ReactNode;
}

interface DashboardProps {
  panels: PanelConfig[];
}

const Dashboard: React.FC<DashboardProps> = ({ panels }) => {
  return (
    <View as="div" className="dashboard-container">
      {panels.map((panel) => (
        <Panel
          key={panel.id}
          id={panel.id}
          title={panel.title}
          minWidth={panel.minWidth}
          minHeight={panel.minHeight}
          location={panel.location}
        >
          {panel.content}
        </Panel>
      ))}
    </View>
  );
};

export default Dashboard;