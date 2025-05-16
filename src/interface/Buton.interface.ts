export interface ButonProps {
    label: string;
    disabled?: boolean;
    loading?: boolean;
    variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    icon?: IconOptions;
    onClick?: (event: MouseEvent) => void;
    preventDefault: boolean;
    title?: string;
    
};

interface IconOptions {
    name: string;
    position?: "left" | "right" | "center"
}