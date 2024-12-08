import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ColorSelection from ".";

describe("ColorSelection", () => {

  it("calls onChange with hex value", () => {
    const onChange = jest.fn();
    render(<ColorSelection value="#ff0000" onChange={onChange} />);
    const colorInput = screen.getByRole("input");
    fireEvent.change(colorInput, { target: { value: "#00ff00" } });
    expect(onChange).toHaveBeenCalledWith("#00ff00");
  });

  it("calls onChange with rgb value when output is set to rgb", () => {
    const onChange = jest.fn();
    render(<ColorSelection value="#ff0000" onChange={onChange} output="rgb" />);
    const colorInput = screen.getByRole("input");
    fireEvent.change(colorInput, { target: { value: "#00ff00" } });
    expect(onChange).toHaveBeenCalledWith("rgb(0, 255, 0)");
  });
});