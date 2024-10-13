# DynamicInput Component

## Purpose
The DynamicInput component renders an appropriate input field based on the provided field type.

## Functionality
- Renders different input types (text, number, date, etc.) based on the field type
- Handles value changes and passes them to the parent component

## Props
- `field`: Object containing field properties (name, type, etc.)
- `value`: Current value of the input
- `onChange`: Function called when input value changes

## Usage
This component is typically used within dynamic form generation to render the appropriate input field for each form field.