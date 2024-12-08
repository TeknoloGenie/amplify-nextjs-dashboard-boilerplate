import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DataTable from "./";

const mockClient = {
  models: {
    Todo: {
      list: jest.fn().mockResolvedValue({ data: [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
      ]}),
      subscribe: jest.fn().mockReturnValue({
        subscribe: jest.fn().mockReturnValue({
          unsubscribe: jest.fn(),
        }),
      }),
    },
  },
};

const mockColumns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
];

describe("DataTable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the table with data", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  it("opens create modal when create button is clicked", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);

    fireEvent.click(screen.getByText("Create New Record"));

    expect(screen.getByText("Create New Record")).toBeInTheDocument();
  });

  it("opens edit modal when edit button is clicked", async () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} />);

    fireEvent.click(screen.getAllByText("Edit")[0]);
    expect(screen.getByText("Edit Record")).toBeInTheDocument();
  });

  it("does not set up subscription when subscribe prop is false", () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={false} />);

    expect(mockClient.models.Todo.subscribe).not.toHaveBeenCalled();
  });

  it("sets up subscription when subscribe prop is true", () => {
    render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={true} />);

    expect(mockClient.models.Todo.subscribe).toHaveBeenCalled();
  });

  it("unsubscribes when component unmounts", () => {
    const { unmount } = render(<DataTable model="Todo" columns={mockColumns} client={mockClient} subscribe={true} />);

    unmount();

    expect(mockClient.models.Todo.subscribe().subscribe().unsubscribe).toHaveBeenCalled();
  });
});