import React from "react";
import type { InputTextAreaProps } from "../../interface/InputTextArea.interface";

const InputTextArea: React.FC<InputTextAreaProps> = ({ label, className, outline }) => {
    if (outline) {
        className = `${className} outline-1 border-2 rounded-lg border-secondary focus:border-primary focus:outline-primary`
    }

    return (
        <textarea className={`${className}`} placeholder={label} />);
}

export default InputTextArea;