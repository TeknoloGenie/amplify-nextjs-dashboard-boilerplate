import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Table, Button } from "@aws-amplify/ui-react";
import Modal from "./Modal";
import DynamicForm from "./DynamicForm";
import SortableTable from "./Table";

interface DataTableProps {
  model: any;
  columns: Array<{ key: string; label: string }>;
}

const DataTable: React.FC<DataTableProps> = ({ model, columns }) => {
  const [data, setData] = useState<typeof model>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const records = await DataStore.query(model);
    setData(records);
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
    if (editingRecord) {
      await DataStore.save(model.copyOf(editingRecord, (updated: any) => {
        Object.assign(updated, newData);
      }));
    } else {
      await DataStore.save(new model(newData));
    }
    fetchData();
    handleCloseModal();
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