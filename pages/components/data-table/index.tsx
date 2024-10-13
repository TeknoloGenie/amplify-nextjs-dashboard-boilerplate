import { type Schema } from "@/amplify/data/resource";
import DataTable from "@/components/data-table";
import { Heading } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import React from "react";
const client = generateClient<Schema>();

const exampleColumns = [
  { key: "id", label: "ID" },
  { key: "content", label: "Content" },
  { key: "createdAt", label: "Created" }
];

const DataTableExample: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Data Table Example</Heading>
      <DataTable model="Todo" columns={exampleColumns} client={client} subscribe={true} />
    </div>
  );
};

export default DataTableExample;