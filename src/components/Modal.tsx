import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded shadow-lg w-11/12 max-w-3xl h-5/6">
        <button className="absolute top-1 right-1 p-1" onClick={onClose}>
          ✕
        </button>
        <div className="w-full h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
