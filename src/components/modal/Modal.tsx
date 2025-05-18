import React from "react";
import type { ModalProps } from "../../interface/Modal.interface";

const Modal: React.FC<ModalProps> = ({className, style, cancelText, onConfirm, onClose, confirmText, title, isOpen, content, showCloseButton}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50  ${className || ''}`} style={style}>
      <div className="modal-content">
        {title && <h2>{title}</h2>}
        <div>{content}</div>
        <div className="modal-buttons">
          {cancelText && <button onClick={onClose}>{cancelText}</button>}
          {onConfirm && confirmText && (
            <button onClick={onConfirm}>{confirmText}</button>
          )}
        </div>
        {showCloseButton !== false && (
          <button onClick={onClose} className="close-button">
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;