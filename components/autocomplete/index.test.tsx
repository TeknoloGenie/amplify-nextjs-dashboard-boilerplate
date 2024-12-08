import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Autocomplete from ".";

describe("Autocomplete", () => {
  const mockOptions = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  it("renders correctly", () => {
    const mockOnChange = jest.fn();
    render(
      <Autocomplete
        options={mockOptions}
        displayProperty="name"
        valueProperty="id"
        value={null}
        onChange={mockOnChange}
        label="Test Autocomplete"
      />
    );

    expect(screen.getByText("Test Autocomplete")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type to search...")).toBeInTheDocument();
  });

  it("filters options based on input", async () => {
    const mockOnChange = jest.fn();
    render(
      <Autocomplete
        options={mockOptions}
        displayProperty="name"
        valueProperty="id"
        value={null}
        onChange={mockOnChange}
        label="Test Autocomplete"
      />
    );

    const input = screen.getByPlaceholderText("Type to search...");
    fireEvent.change(input, { target: { value: "Option 1" } });

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText("Option 3")).not.toBeInTheDocument();
    });
  });

  it("calls onChange when an option is selected", async () => {
    const mockOnChange = jest.fn();
    render(
      <Autocomplete
        options={mockOptions}
        displayProperty="name"
        valueProperty="id"
        value={null}
        onChange={mockOnChange}
        label="Test Autocomplete"
      />
    );

    const input = screen.getByPlaceholderText("Type to search...");
    fireEvent.focus(input);
    fireEvent.click(screen.getByText("Option 1"));
    expect(mockOnChange).toHaveBeenCalledWith(mockOptions[0]);
  });

  it("displays the current value", () => {
    const mockOnChange = jest.fn();
    render(
      <Autocomplete
        options={mockOptions}
        displayProperty="name"
        valueProperty="id"
        value={mockOptions[1]}
        onChange={mockOnChange}
        label="Test Autocomplete"
      />
    );

    const input = screen.getByDisplayValue("Option 2");
    expect(input).toBeInTheDocument();
  });
});