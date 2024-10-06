import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DataStore } from "@aws-amplify/datastore";
import DataTable from "../DataTable";

jest.mock("@aws-amplify/datastore");

const mockModel = {
  copyOf: jest.fn((original, callback) => {
    const copy = { ...original };
    callback(copy);
    return copy;
  }),
};

const mockColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
];

const mockData = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
];

describe("DataTable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (DataStore.query as jest.Mock).mockResolvedValue(mockData);
  });

  it("renders the table with data", async () => {
    render(<DataTable model={mockModel} columns={mockColumns} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("opens create modal when create button is clicked", async () => {
    render(<DataTable model={mockModel} columns={mockColumns} />);

    fireEvent.click(screen.getByText("Create New Record"));

    await waitFor(() => {
      expect(screen.getByText("Create New Record")).toBeInTheDocument();
    });
  });

  it("opens edit modal when edit button is clicked", async () => {
    render(<DataTable model={mockModel} columns={mockColumns} />);

    fireEvent.click(screen.getAllByText("Edit")[0]);

    expect(screen.getByText("Edit Record")).toBeInTheDocument();
  });

  it("saves new record when form is submitted in create modal", async () => {
    render(<DataTable model={mockModel} columns={mockColumns} />);

    fireEvent.click(screen.getByText("Create New Record"));

    fireEvent.click(screen.getByText("Create"));

    expect(DataStore.save).toHaveBeenCalled();
  });

  it("updates existing record when form is submitted in edit modal", async () => {
    render(<DataTable model={mockModel} columns={mockColumns} />);

    fireEvent.click(screen.getAllByText("Edit")[0]);

    fireEvent.click(screen.getByText("Update"));

    expect(DataStore.save).toHaveBeenCalled();
    expect(mockModel.copyOf).toHaveBeenCalled();
  });
});