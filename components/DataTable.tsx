import React, { useState, useEffect } from "react";
// Remove this import as it's not needed in this component
import { Table, Button } from "@aws-amplify/ui-react";
import Modal from "./Modal";
import DynamicForm from "./DynamicForm";
import SortableTable from "./Table";

interface DataTableProps {
  model: string;
  columns: Array<{ key: string; label: string }>;
  client: any;
}

const DataTable: React.FC<DataTableProps> = ({ model, columns, client }) => {
  const [data, setData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: records } = await client.models[model].list({});
      setData(records);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You might want to set an error state here and display it in the UI
    }
  };

  const handleCreate = () => {
    setEditingRecord(null);
    setIsModalOpen(true);
  };

  const handleEdit = (record: React.SetStateAction<null>) => {
    setEditingRecord(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingRecord(null);
  };

  const handleSave = async (newData: any) => {
    try {
      if (editingRecord) {
        await client.models[model].update({
          id: editingRecord.id,
          ...newData,
        });
      } else {
        await client.models[model].create(newData);
      }
      fetchData();
      handleCloseModal();
    } catch (error) {
      console.error("Error saving data:", error);
      // You might want to set an error state here and display it in the UI
    }
  };

  const tableColumns = [
    ...columns,
    {
      key: "actions",
      label: "Actions",
      render: (record: any) => (
        <Button onClick={() => handleEdit(record)}>Edit</Button>
      ),
    },
  ];

  return (
    <div>
      <Button onClick={handleCreate}>Create New Record</Button>
      <SortableTable data={data} columns={tableColumns} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingRecord ? "Edit Record" : "Create New Record"}
      >
        <DynamicForm
          data={editingRecord || {}}
          onChange={handleSave}
          model={model}
        />
      </Modal>
    </div>
  );
};

export default DataTable;