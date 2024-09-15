import React from "react";
import OrderedList from "@/components/OrderedList";

const sampleData = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" },
];

const OrderedListExample = () => {
  return (
    <div>
      <h1>OrderedList Example</h1>
      <OrderedList value={sampleData} />
    </div>
  );
};

export default OrderedListExample;