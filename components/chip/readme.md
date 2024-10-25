# Chip Component

## Purpose
The Chip component creates a tag-like element that can be used for displaying selected items, categories, or labels. It allows for easy addition and removal of items.

## Functionality
- Displays selected items as chips
- Allows adding new chips by typing and pressing Enter
- Supports removal of chips
- Can be used with or without autocomplete functionality

## Props
- `value`: Current input value (string)
- `onChange`: Function called when value changes ((value: string) => void)
- `options`: Optional array of autocomplete options (Array<ComboBoxOption> | undefined)
- `label`: Label for the input field (string)

## Usage
This component is useful in scenarios where multiple selections need to be displayed in a compact form, such as filters, tags, or multi-select fields.