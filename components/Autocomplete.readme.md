# Autocomplete Component

## Purpose
The Autocomplete component provides a searchable dropdown input field that allows users to select from a list of options. It enhances user experience by providing suggestions as the user types.

## Functionality
- Displays a text input field with a dropdown list of options
- Filters options based on user input
- Allows selection of an option from the filtered list
- Supports custom rendering of options
- Provides keyboard navigation for accessibility

## Props
- `options`: Array of selectable items
- `displayProperty`: Key to use for displaying option text
- `valueProperty`: Key to use for option value
- `value`: Currently selected value
- `onChange`: Function called when selection changes
- `label`: Optional label for the input field

## Usage
This component is useful in forms where users need to select from a large list of options, providing a more user-friendly interface than a standard select dropdown.