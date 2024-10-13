import React, { useRef, useEffect, useState } from "react";
import { View } from "@aws-amplify/ui-react";

interface PopoverProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
}

const Popover: React.FC<PopoverProps> = ({ visible, onClose, children, anchorEl }) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, onClose]);

  useEffect(() => {
    if (anchorEl && popoverRef.current) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();

      setPosition({
        top: anchorRect.bottom + window.scrollY,
        left: anchorRect.left + window.scrollX - (popoverRect.width - anchorRect.width) / 2,
      });
    }
  }, [anchorEl, visible]);

  if (!visible) return null;

  return (
    <View
      ref={popoverRef}
      className="fixed z-10 bg-white border border-gray-200 rounded shadow-lg p-4"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {children}
    </View>
  );
};

export default Popover;