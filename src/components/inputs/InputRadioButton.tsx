import React from "react";
import type { InputRadioButtonProps } from "../../interface/InputRadioButton.interface";

const InputRadioButton : React.FC<InputRadioButtonProps> = ({label, className, name}) => {

    className = "w-5 h-5  rounded-full border-2 border-secondary peer-checked:bg-secondary peer-checked:border-primary grid place-items-center transition-all duration-200";
    return (
        <label className="inline-flex items-center cursor-pointer relative">
            <input className="hidden peer" type="radio" name={name} />
            {/* <div className={`${className} peer-checked:hidden mr-2 transition`} ></div> */}
            <div className={`${className} mr-2 transition`}>
                {/* <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
            </div>{label}
        </label>
    );
}

export default InputRadioButton;