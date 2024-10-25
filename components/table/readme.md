# Table Component

## Purpose
The Table component renders a sortable table with customizable columns and data.

## Functionality
- Displays data in a tabular format
- Supports sorting by clicking on column headers
- Allows custom rendering of cell content

## Props
- `data`: Array of objects representing table rows (Array<Record<string, any>>)
- `columns`: Array of column configurations (Array<{
    key: string;
    label: string;
    template?: (row: Record<string, any>) => React.ReactNode;
  }>)
- `filter`: Enable/disable filtering (boolean, optional)
- `filterBy`: Column key to filter by (string, optional)

## Usage
This component is useful for displaying and organizing large sets of data, especially when sorting capabilities are needed.