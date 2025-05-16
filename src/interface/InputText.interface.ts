export interface InputTextProps {
    className?: string;
    label?: string;
    placeHolder?: string;
    clearable?: boolean;
    clearIcon?: string;
    readonly?: boolean;
    disabled?: boolean;
    errorMessage?: string | string[];
    maxWidth?: string | number;
    minWidth?: string | number;
    width?: string | number;
    clear?: () => void;
    outline?: boolean;
}