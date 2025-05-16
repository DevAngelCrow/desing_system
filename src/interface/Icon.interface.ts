import type { SvgIconProps } from "@mui/material";
import * as MaterialIcons from "@mui/icons-material"


export interface IconProps extends SvgIconProps {
    name: keyof typeof MaterialIcons;
    className: string;
}