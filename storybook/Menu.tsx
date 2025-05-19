import React from "react";
import type { MenuProps } from "./interfaces/Menu.interface";

const Menu: React.FC<MenuProps> = ({ items }) => {
    return (
        <nav>
            <ul>
                {items.map((element, index) => {
                    return <li key={index}>{element}</li>
                })}
            </ul>
        </nav>
    );
}

export default Menu;