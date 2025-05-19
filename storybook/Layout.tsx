//import Header from "./Header";
import { useState } from "react";
import { JSX } from "@emotion/react/jsx-runtime";
import Button from "../src/components/buttons/Button";
import InputText from "../src/components/inputs/InputText";
import InputTextArea from "../src/components/inputs/InputTextArea";
import InputCheckBox from "../src/components/inputs/InputCheckBox";
import InputSelect from "../src/components/inputs/InputSelect";
import InputRadioButton from "../src/components/inputs/InputRadioButton";
import Modal from "../src/components/modal/Modal";
import Icon from "../src/components/icons/Icon";

const items = ["Prueba1", "Prueba2", "Prueba3"]
    
type ComponentKey = "button" | "inputCheckbox" | "inputSelect" | "inputText" | "inputTextArea" | "icon" | "inputRadioButton" | "modal";


const StorybookLayout = () => {
  const [selected, setSelected] = useState<ComponentKey>("button");
    const [isModalOpen, setIsModalOpen] = useState(false);
        const handleOpenModal = () => {
            setIsModalOpen(true);
        }
        const handleCloseModal = () => {
            setIsModalOpen(false);
        }
const componentMap : Record<ComponentKey, JSX.Element> = {
    button: <Button className="bg-secondary text-primary" label="Botón" icon={{ name: "Alarm", position: "right" }}
                onClick={() => console.log("onClick")} />,
    inputCheckbox: <InputCheckBox label='InputCheckBox' />,
    inputSelect: <InputSelect items={items} />,
    inputText: <InputText outline label='InputText' />,
    inputTextArea: <InputTextArea label='InputTextArea' outline />,
    inputRadioButton: <InputRadioButton label="InputRadioButton" name="prueba" />,
    icon:  <Icon className="" name="Alarm"></Icon>,
    modal: <div><Button onClick={handleOpenModal} className='bg-secondary text-primary' label='Modal' />
    <Modal onClose={handleCloseModal} isOpen={isModalOpen} title="Modal" content={<div><span>Pruebas pruebas</span></div>} /></div>
};
  return (
    <div className="flex h-screen justify-start">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r p-4">
        <h2 className="text-xl font-bold mb-4">Componentes</h2>
        <ul className="space-y-2">
          <li><button onClick={() => setSelected("button")} className="hover:underline">Botón</button></li>
          <li><button onClick={() => setSelected("inputText")} className="hover:underline">InputText</button></li>
          <li><button onClick={() => setSelected("inputTextArea")} className="hover:underline">InputTextArea</button></li>
          <li><button onClick={() => setSelected("inputCheckbox")} className="hover:underline">InputCheckBox</button></li>
          <li><button onClick={() => setSelected("inputSelect")} className="hover:underline">InputSelect</button></li>
          <li><button onClick={() => setSelected("inputRadioButton")} className="hover:underline">inputRadioButton</button></li>
          <li><button onClick={() => setSelected("icon")} className="hover:underline">Icon</button></li>
          <li><button onClick={() => setSelected("modal")} className="hover:underline">Modal</button></li>
        </ul>
      </aside>

      {/* Contenido */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6 capitalize">{selected}</h1>
        <div>{componentMap[selected]}</div>
      </main>
    </div>
  );
};

export default StorybookLayout;