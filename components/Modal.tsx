import React from "react";
import { Card, Button } from "@aws-amplify/ui-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900/80 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-md shadow-lg p-5">
        {/* Modal content */}
        <div className="flex justify-between items-center rounded-t-md mx-auto pb-4 bg-white">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button
            onClick={onClose}
            testId="top-right-close"
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </Button>
        </div>
        <div className="flex justify-between items-center mx-auto pb-4 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
