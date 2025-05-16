import React from "react";
import type { InputTextProps } from "../../interface/InputText.interface";


const InputText : React.FC<InputTextProps> = ({label, className, outline}) => {
    if(outline){
        className = `${className} outline-1`
    }
    return (
        <input className={`${className}`} type="text" placeholder={label} />
    );
}

export default InputText;