import React from 'react';
import { Card, Button } from '@aws-amplify/ui-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black opacity-50" 
        onClick={onClose}
      ></div>
      <Card className="z-10 w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <Button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </Button>
        </div>
        <div className="mt-4">
          {children}
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Close
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Modal;
