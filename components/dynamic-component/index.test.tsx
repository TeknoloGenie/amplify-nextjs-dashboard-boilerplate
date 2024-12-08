import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DynamicComponent from "./";

describe("DynamicComponent", () => {
  it("renders a Text component", () => {
    render(
      <DynamicComponent
        options={{
          component: "Text",
          props: { children: "Hello, World!" },
        }}
      />
    );
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders a Button component", () => {
    render(
      <DynamicComponent
        options={{
          component: "Button",
          props: { children: "Click me" },
        }}
      />
    );
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders nested components", () => {
    render(
      <DynamicComponent
        options={{
          component: "Flex",
          props: { direction: "column" },
          children: [
            {
              options:{
                component: "Heading",
                props: { level: 2, children: "Title" },}
            },
            {
              options:{
                component: "Text",
                props: { children: "Content" },}
            },
          ],
        }}
      />
    );
    expect(screen.getByRole("heading", { name: "Title" })).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("logs an error for non-existent components", () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <DynamicComponent
        options={{
          component: "NonExistentComponent" as any,
          props: {},
        }}
      />
    );
    expect(consoleErrorSpy).toHaveBeenCalledWith("Component NonExistentComponent not found in Amplify UI");
    consoleErrorSpy.mockRestore();
  });
});