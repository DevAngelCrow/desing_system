import React from "react";
import type { ModalProps } from "../../interface/Modal.interface";

const Modal: React.FC<ModalProps> = ({ className, cancelText, onConfirm, onClose, confirmText, title, isOpen, content, showCloseButton }) => {
    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} ${className}`}>
            <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full transform transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0" : "translate-y-4"}`}>
                {title && (
                    <div className="px-6 py-4 border-b">
                        <h2 className="text-xl font-semibold">{title}</h2>
                    </div>
                )}
                <div className="p-6">
                    {content}
                </div>
                {(onConfirm || cancelText) && (
                    <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3">
                        {cancelText && (
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow transition duration-150 ease-in" onClick={onConfirm}>
                                {confirmText}
                            </button>
                        )}
                    </div>
                )}
                {showCloseButton !== false && (
                    <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out"
                        onClick={onClose}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Modal;