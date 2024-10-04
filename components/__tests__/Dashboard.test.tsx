import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders panels based on provided configuration', () => {
    const panels = [
      {
        id: 'panel1',
        title: 'Panel 1',
        minWidth: 'w-1/2',
        minHeight: 'h-64',
        content: <div>Panel 1 content</div>,
      },
      {
        id: 'panel2',
        title: 'Panel 2',
        minWidth: 'w-1/2',
        minHeight: 'h-64',
        content: <div>Panel 2 content</div>,
      },
    ];

    const { getByText } = render(<Dashboard panels={panels} />);

    expect(getByText('Panel 1')).toBeInTheDocument();
    expect(getByText('Panel 2')).toBeInTheDocument();
    expect(getByText('Panel 1 content')).toBeInTheDocument();
    expect(getByText('Panel 2 content')).toBeInTheDocument();
  });
});