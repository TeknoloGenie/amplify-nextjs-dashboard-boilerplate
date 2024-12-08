import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DynamicInput from "./";

describe("DynamicInput", () => {
  test("renders with default props", () => {
    const mockOnChange = jest.fn();
    render(<DynamicInput data={{}} path="test" onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText("test")).toBeInTheDocument();
  });

  test("handles input change", () => {
    const mockOnChange = jest.fn();
    const initialData = { test: "initial" };
    render(<DynamicInput data={initialData} path="test" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText("test");
    fireEvent.change(input, { target: { value: "new value" } });
    
    expect(mockOnChange).toHaveBeenCalledWith({ test: "new value" });
  });

  test("renders with label", () => {
    const mockOnChange = jest.fn();
    render(<DynamicInput data={{}} path="test" onChange={mockOnChange} label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  test("handles nested path", () => {
    const mockOnChange = jest.fn();
    const initialData = { nested: { value: "initial" } };
    render(<DynamicInput data={initialData} path="nested.value" onChange={mockOnChange} />);
    
    const input = screen.getByPlaceholderText("nested.value");
    expect(input).toHaveValue("initial");
    
    fireEvent.change(input, { target: { value: "new nested value" } });
    expect(mockOnChange).toHaveBeenCalledWith({ nested: { value: "new nested value" } });
  });

  test("displays error for invalid path", () => {
    const mockOnChange = jest.fn();
    const initialData = { test: "value" };
    render(<DynamicInput data={initialData} path="invalid.path" onChange={mockOnChange} />);
    
    expect(screen.getByText("Invalid path: invalid.path")).toBeInTheDocument();
  });
});