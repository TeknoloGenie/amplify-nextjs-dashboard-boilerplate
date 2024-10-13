import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./";

describe("Modal", () => {
  const onCloseMock = jest.fn();
  const title = "Test Modal";
  const children = <p>Modal content</p>;

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  it("calls onClose when top right close button with X is clicked", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    fireEvent.click(screen.getByTestId("top-right-close"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("renders title and children correctly", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });
});
