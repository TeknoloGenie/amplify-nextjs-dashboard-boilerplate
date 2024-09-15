import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import OrderedList from "../OrderedList";

describe("OrderedList", () => {
  const mockData = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  it("renders correctly", () => {
    render(<OrderedList value={mockData} />);
    mockData.forEach((item) => {
      expect(screen.getByText(`name: ${item.name}`)).toBeInTheDocument();
    });
  });

  it("allows dragging and dropping items", () => {
    render(<OrderedList value={mockData} />);
    const items = screen.getAllByRole("article");
    
    // Simulate drag and drop
    fireEvent.dragStart(items[0]);
    fireEvent.dragOver(items[2]);
    fireEvent.drop(items[2]);

    // Check if the order has changed
    const updatedItems = screen.getAllByRole("article");
    expect(updatedItems[2].textContent).toContain("Item 1");
    expect(updatedItems[0].textContent).toContain("Item 2");
  });
});