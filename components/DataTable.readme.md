# DataTable Component

## Purpose
The DataTable component provides a dynamic table interface for displaying, creating, and editing data from a specified model.

## Functionality
- Fetches and displays data from a specified model
- Supports creating new records
- Allows editing existing records
- Provides sorting functionality
- Optionally subscribes to real-time updates

## Props
- `model`: String identifier for the data model
- `columns`: Array of column configurations (key and label)
- `client`: Client object for interacting with the data source
- `subscribe`: Boolean to enable/disable real-time updates (default: false)

## Usage
This component is useful for applications that need to display and manage tabular data, particularly when working with dynamic data models or when real-time updates are required.