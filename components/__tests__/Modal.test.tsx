import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../Modal';

describe('Modal', () => {
  const onCloseMock = jest.fn();
  const title = 'Test Modal';
  const children = <p>Modal content</p>;

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    expect(screen.queryByText(title)).not.toBeInTheDocument();
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    fireEvent.click(screen.getByText('Close'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('renders title and children correctly', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title={title}>
        {children}
      </Modal>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });
});
