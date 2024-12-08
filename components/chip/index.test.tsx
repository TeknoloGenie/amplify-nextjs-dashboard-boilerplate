import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Chip from ".";

describe("Chip component", () => {
  it("renders input field", () => {
    render(<Chip label="Chip component" value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("creates a chip when Enter is pressed", () => {
    render(<Chip label="Chip component" value="test" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("renders autocomplete when options are provided", () => {
    const options = [{"id": "apple", "label": "apple"}, {"id": "banana", "label": "banana"}, {"id": "cherry", "label": "cherry"}];
    render(<Chip label="Chip component" value="" onChange={() => {}} options={options} />);
    const autocomplete = screen.getByRole("combobox");
    expect(autocomplete).toBeInTheDocument();
  });
});