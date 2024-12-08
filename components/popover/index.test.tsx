import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Popover from "./";

describe("Popover", () => {
  const mockOnClose = jest.fn();
  const anchorEl = document.createElement("div");

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children when visible is true", () => {
    render(
      <Popover visible={true} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });

  it("does not render children when visible is false", () => {
    render(
      <Popover visible={false} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  it("calls onClose when clicking outside", () => {
    render(
      <Popover visible={true} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    fireEvent.mouseDown(document);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("does not call onClose when clicking inside", () => {
    render(
      <Popover visible={true} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    fireEvent.mouseDown(screen.getByText("Popover content"));
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});