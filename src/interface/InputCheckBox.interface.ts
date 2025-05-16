export interface InputCheckBoxProps{
    onClick?: (value: boolean) => boolean;
    label?: string;
    color?: string;
    className?: string;
    disabled?: boolean;
    maxWidth?: number | string;
    minWidth?: number | string;
    readonly?: boolean;
    width?: number | string;
}