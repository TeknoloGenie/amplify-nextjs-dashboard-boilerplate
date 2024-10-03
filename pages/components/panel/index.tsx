import React from "react";
import Panel from "@/components/Panel";
import Table  from "@/components/Table";
import DynamicForm  from "@/components/DynamicForm";

const PanelExample: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Panel
        id="panel-1"
        title="Table Panel"
        minWidth="w-1/2"
        minHeight="h-64"
        location={{ neighbor: "panel-2", position: "nextto" }}
      >
        <Table data={[]} columns={[]} />
      </Panel>
      <Panel
        id="panel-2"
        title="Form Panel"
        minWidth="w-1/2"
        minHeight="h-64"
        location={{ neighbor: "panel-1", position: "nextto" }}
      >
        <DynamicForm data={{}} onChange={() => {}} />
      </Panel>
    </div>
  );
};

export default PanelExample;