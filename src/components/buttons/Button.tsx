import React from "react";
import type { ButtonProps } from "../../interface/Button.interface";
import Icon from "../icons/Icon";

const Button: React.FC<ButtonProps> = ({ label, className, icon, disabled, value, onClick }) => {
     
    return (
        <button type="button" disabled={disabled}  className={`${className}`} onClick={onClick} value={value?.toString()}>
                {icon?.position === 'left' ? <Icon className={icon.position}  name="Alarm"></Icon> : null }
                {icon?.position === 'center' ? <Icon className={icon.position}  name="Alarm"></Icon> : <span>{label}</span>}
                {icon?.position === 'right' ? <Icon className={icon.position}  name="Alarm"></Icon> : null }
        </button>
    );
}

export default Button;