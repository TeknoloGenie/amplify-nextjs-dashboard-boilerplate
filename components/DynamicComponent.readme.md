# DynamicComponent

## Purpose
The DynamicComponent is a flexible wrapper that allows for dynamic rendering of Amplify UI components based on provided configuration.

## Functionality
- Renders Amplify UI components dynamically
- Supports nested component structures
- Passes props to rendered components

## Props
- `options`: An object containing:
  - `component`: The name of the Amplify UI component to render
  - `props`: An object of props to pass to the component
  - `children`: An optional array of nested DynamicComponentProps

## Usage
This component is useful for creating flexible and configurable UIs, especially when the exact structure of the UI might not be known at compile time or needs to be determined dynamically.