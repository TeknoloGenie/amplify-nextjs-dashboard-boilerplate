import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortableTable from "../Table";

const sampleData = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "age", label: "Age" },
];

describe("SortableTable", () => {
  it("renders the table with correct data", () => {
    render(<SortableTable data={sampleData} columns={columns} />);
    
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("sorts the table when clicking on column headers", () => {
    render(<SortableTable data={sampleData} columns={columns} />);
    
    // Check initial order
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("1Alice30");
    expect(rows[2]).toHaveTextContent("2Bob25");
    expect(rows[3]).toHaveTextContent("3Charlie35");

    // Sort by name
    fireEvent.click(screen.getByText("Name"));
    const sortedRows = screen.getAllByRole("row");
    expect(sortedRows[1]).toHaveTextContent("1Alice30");
    expect(sortedRows[2]).toHaveTextContent("2Bob25");
    expect(sortedRows[3]).toHaveTextContent("3Charlie35");

    // Sort by age
    fireEvent.click(screen.getByText("Age"));
    const ageSortedRows = screen.getAllByRole("row");
    expect(ageSortedRows[1]).toHaveTextContent("2Bob25");
    expect(ageSortedRows[2]).toHaveTextContent("1Alice30");
    expect(ageSortedRows[3]).toHaveTextContent("3Charlie35");
  });

  it("handles empty data", () => {
    render(<SortableTable data={[]} columns={columns} />);
    expect(screen.queryByRole("row")).toBeNull();
  });

  it("handles single row data", () => {
    const singleRowData = [{ id: 1, name: "Alice", age: 30 }];
    render(<SortableTable data={singleRowData} columns={columns} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(2); // Header row + data row
    expect(rows[1]).toHaveTextContent("1Alice30");
  });
});
