import SortableTable from "@/components/table";
import { useState } from "react";

export default function ModalExample() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <h1>This example filters by name property, but can filter by any and all, including deeply nested.</h1>
            <br />
            <SortableTable
                data={[
                    { id: 1, name: "Alice", age: 30, occupation: "Engineer" },
                    { id: 2, name: "Bob", age: 25, occupation: "Designer" },
                    { id: 3, name: "Charlie", age: 35, occupation: "Manager" },
                    { id: 4, name: "David", age: 28, occupation: "Developer" },
                    { id: 5, name: "Eva", age: 32, occupation: "Analyst" },
                ]}
                columns={[
                    { key: "id", label: "ID" },
                    { key: "name", label: "Name" },
                    { key: "age", label: "Age" },
                    { key: "occupation", label: "Occupation" },
                ]}
                filter
                filterBy="name"
            />
        </div>
    )
}