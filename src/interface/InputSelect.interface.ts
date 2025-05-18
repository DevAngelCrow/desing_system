export interface InputSelectProps {
    name?: string;
    items?: Array<string | number | ItemObject>;
    label?: string;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    onChange?: (value: string) => void;
    className?: string;
}

interface ItemObject {
    [key:string]: unknown;
}