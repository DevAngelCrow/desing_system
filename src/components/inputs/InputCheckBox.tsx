import React from "react";
import type { InputCheckBoxProps } from "../../interface/InputCheckBox.interface";

const InputCheckBox: React.FC<InputCheckBoxProps> = ({ label, className }) => {

    className = "w-5 h-5 rounded border-2 border-secondary peer-checked:bg-secondary peer-checked:border-primary grid place-items-center transition";
    return (
        <label className="inline-flex items-center">
            <input className="hidden peer" type="checkbox" />
            <div className={`${className} peer-checked:hidden mr-2`} ></div>
            <div className={`${className} mr-2 hidden peer-checked:grid`}>
                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>{label}
        </label>
    );
}

export default InputCheckBox;