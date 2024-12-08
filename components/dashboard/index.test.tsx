import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dashboard from ".";

describe("Dashboard", () => {
  it("renders panels based on provided configuration", () => {
    const panels = [
      {
        id: "panel1",
        title: "Panel 1",
        minWidth: "w-1/2",
        minHeight: "h-64",
        content: <div>Panel 1 content</div>,
      },
      {
        id: "panel2",
        title: "Panel 2",
        minWidth: "w-1/2",
        minHeight: "h-64",
        content: <div>Panel 2 content</div>,
      },
    ];

    render(<Dashboard panels={panels} />);

    expect(screen.getByText("Panel 1")).toBeInTheDocument();
    expect(screen.getByText("Panel 2")).toBeInTheDocument();
    expect(screen.getByText("Panel 1 content")).toBeInTheDocument();
    expect(screen.getByText("Panel 2 content")).toBeInTheDocument();
  });
});