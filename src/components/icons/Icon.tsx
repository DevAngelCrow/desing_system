import React from "react";
import type { IconProps } from "../../interface/Icon.interface";
//import { SvgIcon } from "@mui/material";
import * as MaterialIcons from "@mui/icons-material"

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const IconComponent = MaterialIcons[name];

    if(!IconComponent){
        console.log(`Icono no encontrado: ${name}`);
        return null;
    }

    return <IconComponent className={`${className} flex`}></IconComponent>
}

export default Icon;