import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MenuLinks from "./";

const mockPush = jest.fn().mockResolvedValue(true);
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("MenuLinks", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const mockItems = [
    {
      path: "/home",
      label: "Home",
      preloadData: jest.fn().mockResolvedValue(undefined),
    },
    {
      path: "/about",
      label: "About",
      params: { id: "123" },
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  it("renders all menu items", () => {
    render(<MenuLinks items={mockItems} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders an optional label at the top of the entire MenuLinks", () => {
    render(<MenuLinks items={mockItems} label="Main Menu" />);
    expect(screen.getByText("Main Menu")).toBeInTheDocument();
  });

  it("calls preloadData and router.push when clicking a menu item", async () => {
    render(<MenuLinks items={mockItems} />);
    const homeLink = screen.getByText("Home");
    fireEvent.click(homeLink);
    expect(mockItems[0].preloadData).toHaveBeenCalled();
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith({
        pathname: "/home",
        query: undefined,
      });
    });
  });

  it("calls router.push with params when clicking a menu item with params", async () => {
    render(<MenuLinks items={mockItems} />);
    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith({
        pathname: "/about",
        query: { id: "123" },
      });
    });
  });
});