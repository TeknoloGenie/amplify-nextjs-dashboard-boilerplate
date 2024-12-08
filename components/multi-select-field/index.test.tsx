import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MultiSelectField from ".";

const mockOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

describe("MultiSelectField", () => {
  it("renders correctly", () => {
    const mockOnChange = jest.fn();
    render(<MultiSelectField options={mockOptions} onChange={mockOnChange} label="Test Label" />);
    
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    mockOptions.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it("handles selecting and deselecting options", () => {
    const mockOnChange = jest.fn();
    render(<MultiSelectField options={mockOptions} onChange={mockOnChange} label="Test Label" />);

    const option1Checkbox = screen.getByLabelText("Option 1");
    const option2Checkbox = screen.getByLabelText("Option 2");

    fireEvent.click(option1Checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(["option1"]);

    fireEvent.click(option2Checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(["option1", "option2"]);

    fireEvent.click(option1Checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(["option2"]);
  });
});
