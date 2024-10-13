# Dashboard Component

## Purpose
The Dashboard component provides a flexible layout for displaying multiple panels of content in a dashboard-like interface.

## Functionality
- Renders multiple panels based on provided configuration
- Supports custom positioning of panels relative to each other
- Allows for flexible sizing of panels

## Props
- `panels`: Array of panel configurations, each containing:
  - `id`: Unique identifier for the panel
  - `title`: Title of the panel
  - `minWidth`: Minimum width of the panel
  - `minHeight`: Minimum height of the panel
  - `location`: Optional positioning relative to other panels
  - `content`: React node to be rendered inside the panel

## Usage
This component is ideal for creating customizable dashboards or layouts where multiple pieces of content need to be displayed in an organized manner.