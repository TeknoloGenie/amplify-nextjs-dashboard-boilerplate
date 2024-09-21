import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Popover from '../Popover';

describe('Popover', () => {
  const mockOnClose = jest.fn();
  const anchorEl = document.createElement('div');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders children when isOpen is true', () => {
    render(
      <Popover isOpen={true} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  it('does not render children when isOpen is false', () => {
    render(
      <Popover isOpen={false} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    expect(screen.queryByText('Popover content')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking outside', () => {
    render(
      <Popover isOpen={true} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    fireEvent.mouseDown(document);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('does not call onClose when clicking inside', () => {
    render(
      <Popover isOpen={true} onClose={mockOnClose} anchorEl={anchorEl}>
        <div>Popover content</div>
      </Popover>
    );
    fireEvent.mouseDown(screen.getByText('Popover content'));
    expect(mockOnClose).not.toHaveBeenCalled();
  });
});