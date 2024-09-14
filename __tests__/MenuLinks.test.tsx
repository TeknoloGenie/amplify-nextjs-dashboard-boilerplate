import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MenuLinks from '@/components/MenuLinks';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

describe('MenuLinks', () => {
  const mockItems = [
    {
      path: '/home',
      label: 'Home',
      preloadData: jest.fn().mockResolvedValue(undefined),
    },
    {
      path: '/about',
      label: 'About',
      params: { id: '123' },
    },
    {
      path: '/contact',
      label: 'Contact',
    },
  ];

  it('renders all menu items', () => {
    const { getByText } = render(<MenuLinks items={mockItems} />);
    
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('calls preloadData and router.push when clicking a menu item', async () => {
    const { getByText } = render(<MenuLinks items={mockItems} />);
    const homeLink = getByText('Home');

    fireEvent.click(homeLink);

    await waitFor(() => {
      expect(mockItems[0].preloadData).toHaveBeenCalled();
    });

    const { useRouter } = require('next/router');
    const mockPush = useRouter().push;

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/home',
      query: undefined,
    });
  });

  it('calls router.push with params when clicking a menu item with params', () => {
    const { getByText } = render(<MenuLinks items={mockItems} />);
    const aboutLink = getByText('About');

    fireEvent.click(aboutLink);

    const { useRouter } = require('next/router');
    const mockPush = useRouter().push;

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/about',
      query: { id: '123' },
    });
  });
});