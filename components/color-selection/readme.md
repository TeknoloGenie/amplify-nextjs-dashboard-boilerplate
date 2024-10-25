# ColorSelection Component

## Purpose
The ColorSelection component provides a color picker interface for users to select colors in either HEX or RGB format.

## Functionality
- Displays a color input field
- Allows users to pick a color using the browser's native color picker
- Supports output in both HEX and RGB formats

## Props
- `value`: Current color value (string)
- `onChange`: Function called when color changes ((value: string) => void)
- `className`: Optional CSS class for styling (string | undefined)
- `output`: Specifies output format ('rgb' or 'hex', default is 'hex') ('rgb' | 'hex' | undefined)

## Usage
This component is useful in applications where color selection is required, such as in design tools, theme customization, or any scenario where users need to pick colors.