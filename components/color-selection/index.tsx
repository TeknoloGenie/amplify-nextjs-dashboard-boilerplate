import React, { useRef, useState } from "react";

interface ColorSelectionProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  output?: "rgb" | "hex";
}

const ColorSelection: React.FC<ColorSelectionProps> = ({ value, onChange, output = "hex", className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleColorChange = (color: string) => {
    const formattedColor = output === "rgb" ? hexToRgb(color) : color;
    onChange(formattedColor);
    setIsOpen(false);
  };

  const hexToRgb = (hex: string): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
      : hex;
  };

  return (
    <input
      type="color"
      role='input'
      value={value}
      className={className || "h-8 w-8"}
      onChange={(e) => handleColorChange(e.target.value)}
    />
  );
};

export default ColorSelection;