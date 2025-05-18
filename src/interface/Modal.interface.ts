export interface ModalProps {
  isOpen: boolean;
  title?: string; 
  content?: React.ReactNode; 
  onClose?: () => void; 
  onConfirm?: () => void; 
  confirmText?: string;
  cancelText?: string; 
  showCloseButton?: boolean; 
  disableOverlayClose?: boolean; 
  className?: string; 
  style?: React.CSSProperties; 
}
