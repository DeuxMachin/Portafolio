import { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          {title && (
            <h2 className="text-xl font-bold text-[#FFD1DC]">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}