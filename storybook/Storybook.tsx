import React from "react";
import Button from "../src/components/buttons/Button";
import InputText from "../src/components/inputs/InputText";
import InputTextArea from "../src/components/inputs/InputTextArea";
import InputCheckBox from "../src/components/inputs/InputCheckBox";
import InputRadioButton from "../src/components/inputs/InputRadioButton";
import InputSelect from "../src/components/inputs/InputSelect";
import Modal from "../src/components/modal/Modal";
import { useState } from 'react';


const StoryBook: React.FC = () => {
    const items = ["Prueba1", "Prueba2", "Prueba3"]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    return (
        <div className='flex flex-col'>
            <Button className="bg-secondary text-primary" label="Botón" icon={{ name: "Alarm", position: "right" }}
                onClick={() => console.log("onClick")} />
            <br></br>
            <InputText outline label='InputText' />
            <br></br>
            <InputTextArea label='InputTextArea' outline />
            <br></br>
            <InputCheckBox label='InputCheckBox' />
            <br></br>
            <div>
                <InputRadioButton label="InputRadioButton" name="prueba" /><InputRadioButton label="InputRadioButton" name="prueba" />
            </div>
            <br></br>
            <InputSelect items={items} />
            <br></br>
            <Button onClick={handleOpenModal} className='bg-secondary text-primary' label='Modal' />
            <Modal onClose={handleCloseModal} isOpen={isModalOpen} title="Modal" content={<div><span>Pruebas pruebas</span></div>} />
            <br></br>
        </div>
    );
}

export default StoryBook;