# MultiSelectField Component

## Purpose
The MultiSelectField component allows users to select multiple options from a list.

## Functionality
- Displays a list of selectable options
- Allows multiple selections
- Provides a search functionality to filter options

## Props
- `options`: Array of selectable options (Option[])
- `onChange`: Function called when selection changes ((selectedValues: string[]) => void)
- `label`: Label for the multi-select field (string)

## Usage
This component is useful in forms where users need to select multiple items from a list of options, such as selecting tags, categories, or multiple recipients.