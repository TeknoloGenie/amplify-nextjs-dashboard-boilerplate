import { Button } from "@aws-amplify/ui-react";
import React, { useCallback, useEffect, useState } from "react";
import DynamicForm from "../dynamic-form";
import Modal from "../modal";
import SortableTable from "../table";

interface DataTableProps {
  model: string;
  columns: Array<{ key: string; label: string }>;
  client: any;
  subscribe?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ model, columns, client, subscribe = false }) => {
  const [data, setData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState<any>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const [initatedSub, setInitiatedSub] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const { data: records } = await client.models[model].list({});
      setData(records);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You might want to set an error state here and display it in the UI
    }
  }, [client.models, model]);

  useEffect(() => {
    fetchData();
    if (subscribe && !initatedSub) {
      const sub = client.models[model].observeQuery().subscribe({
        next: () => fetchData(),
        error: (error: any) => console.error("Subscription error:", error),
      });
      setSubscription(sub);
      setInitiatedSub(true);
    }
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [client.models, fetchData, model, subscribe, subscription, initatedSub]);

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
      template: (record: any) => (
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
          onChange={setEditingRecord}
          onSubmit={handleSave}
          model={client.models[model]}
        />
      </Modal>
    </div>
  );
};

export default DataTable;