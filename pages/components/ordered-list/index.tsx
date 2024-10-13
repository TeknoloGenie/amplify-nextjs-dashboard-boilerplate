import OrderedList from "@/components/ordered-list";

const sampleData = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" },
  { id: 4, name: "Item 4", description: "Description for Item 4" },
  { id: 5, name: "Item 5", description: "Description for Item 5" },
  { id: 6, name: "Item 6", description: "Description for Item 6" }
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