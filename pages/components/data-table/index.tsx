import React from "react";
import { Heading } from "@aws-amplify/ui-react";
import DataTable from "../../../components/DataTable";
import { type Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
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
      <DataTable model="Todo" columns={exampleColumns} client={client} />
    </div>
  );
};

export default DataTableExample;