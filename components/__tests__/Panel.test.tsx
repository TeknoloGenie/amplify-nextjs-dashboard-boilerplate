import React from "react";
import { render, screen } from "@testing-library/react";
import Panel from "../Panel";
import Table from "../Table";
import DynamicForm from "../DynamicForm";

describe("Panel", () => {
  it("renders correctly with title and children", () => {
    render(
      <Panel id="test-panel" title="Test Panel" minWidth="w-1/2" minHeight="h-64">
        <Table data={[]} columns={[]} />
        <DynamicForm data={{}} onChange={() => {}} />
      </Panel>
    );

    expect(screen.getByText("Test Panel")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test Panel");
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("dynamic-form")).toBeInTheDocument();
  });

  it("applies correct CSS classes for minWidth and minHeight", () => {
    render(
      <Panel id="test-panel" title="Test Panel" minWidth="w-1/2" minHeight="h-64">
        <div>Test content</div>
      </Panel>
    );

    const panelElement = screen.getByRole("heading", { level: 2 }).parentElement;
    expect(panelElement).toHaveClass("w-1/2");
    expect(panelElement).toHaveClass("h-64");
  });

  it("renders with location prop", () => {
    render(
      <Panel
        id="test-panel"
        title="Test Panel"
        minWidth="w-1/2"
        minHeight="h-64"
        location={{ neighbor: "neighbor-panel", position: "below" }}
      >
        <div>Test content</div>
      </Panel>
    );

    const panelElement = screen.getByRole("heading", { level: 2 }).parentElement;
    expect(panelElement).toHaveAttribute("id", "test-panel");
  });

  it("only renders Table and DynamicForm components as children", () => {
    render(
      <Panel id="test-panel" title="Test Panel" minWidth="w-1/2" minHeight="h-64">
        <Table data={[]} columns={[]} />
        <DynamicForm data={{}} onChange={() => {}} />
        <div>This should not render</div>
      </Panel>
    );

    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getByTestId("dynamic-form")).toBeInTheDocument();
    expect(screen.queryByText("This should not render")).not.toBeInTheDocument();
  });
});