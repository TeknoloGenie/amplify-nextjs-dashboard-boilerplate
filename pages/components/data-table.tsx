import React from "react";
import { Heading } from "@aws-amplify/ui-react";
import DataTable from "../../components/DataTable";
import type { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/api";
const client = generateClient<Schema>();

const exampleColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
  { key: "address.street", label: "Street" },
  { key: "address.city", label: "City" },
  { key: "address.country", label: "Country" },
  { key: "hobbies", label: "Hobbies" },
];

const DataTableExample: React.FC = () => {
  return (
    <div>
      <Heading level={1}>Data Table Example</Heading>
      <DataTable model={client.models.Todo} columns={exampleColumns} />
    </div>
  );
};

export default DataTableExample;