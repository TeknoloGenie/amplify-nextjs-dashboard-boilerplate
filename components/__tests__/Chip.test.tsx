import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chip from '../Chip';

describe('Chip component', () => {
  it('renders input field', () => {
    const { getByRole } = render(<Chip label="Chip component" value="" onChange={() => {}} />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('creates a chip when Enter is pressed', () => {
    const { getByRole, getByText } = render(<Chip label="Chip component" value="test" onChange={() => {}} />);
    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(getByText('test')).toBeInTheDocument();
  });

  it('renders autocomplete when options are provided', () => {
    const options = [{"id": "apple", "label": "apple"}, {"id": "banana", "label": "banana"}, {"id": "cherry", "label": "cherry"}];
    const { getByRole } = render(<Chip label="Chip component" value="" onChange={() => {}} options={options} />);
    const autocomplete = getByRole('combobox');
    expect(autocomplete).toBeInTheDocument();
  });
});