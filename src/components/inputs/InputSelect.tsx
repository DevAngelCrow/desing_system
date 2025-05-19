import React from "react";
import type { InputSelectProps } from "../../interface/InputSelect.interface";

const InputSelect : React.FC<InputSelectProps> = ({className, items}) => {

    if(!items){
        items = [];
    }
    className = "outline-1 border-2 rounded-lg border-secondary focus:border-primary focus:outline-primary";
    return (
        <select defaultValue="" className={className}>
            <option hidden disabled defaultValue={"''"}></option>
            {items.map((item, index) => {
                if(typeof item === 'string' || typeof item === "number"){
                    return <option value={index} key={index}>{item}</option>
                }
            })}
        </select>
    );

}

export default InputSelect;