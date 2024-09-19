import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import MenuLinks from "../MenuLinks";

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
    const { getByText } = render(<MenuLinks items={mockItems} />);
    
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  it("calls preloadData and router.push when clicking a menu item", async () => {
    const { getByText } = render(<MenuLinks items={mockItems} />);
    const homeLink = getByText("Home");

    await act(async () => {
      fireEvent.click(homeLink);
    });

    expect(mockItems[0].preloadData).toHaveBeenCalled();
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith({
        pathname: "/home",
        query: undefined,
      });
    });
  });

  it("calls router.push with params when clicking a menu item with params", async () => {
    const { getByText } = render(<MenuLinks items={mockItems} />);
    const aboutLink = getByText("About");

    await act(async () => {
      fireEvent.click(aboutLink);
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith({
        pathname: "/about",
        query: { id: "123" },
      });
    });
  });
});