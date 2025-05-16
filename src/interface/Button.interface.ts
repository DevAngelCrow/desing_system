export interface ButtonProps {
    className: string;
    label: string;
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    icon?: IconOptions;
    onClick?: () => void;
    onMouseDown?: () => void;
    onMouseHover?: () => void;
    onKeyPress?: () => void;
    onKeyDown?: () => void;
    preventDefault?: boolean;
    title?: string;
    "max-height"?: string | number;
    "max-width"?: string | number;
    position?: "fixed" | "static" | "relative" | "absolute" | "sticky";
    readonly?: boolean;
    value?: unknown;
};

interface IconOptions {
    name: string;
    position: "left" | "right" | "center"
}