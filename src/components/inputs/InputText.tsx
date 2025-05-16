import React from "react";
import type { InputTextProps } from "../../interface/InputText.interface";


const InputText : React.FC<InputTextProps> = ({label, className, outline}) => {
    console.log(outline, "outline")
    if(outline){
        className = `${className} outline-1 border-2 rounded-lg border-secondary focus:border-primary focus:outline-primary`
    }
    return (
        <input className={`${className} `} type="text" placeholder={label} />
    );
}

export default InputText;