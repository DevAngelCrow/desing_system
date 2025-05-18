
import './App.css'
import Button from "../src/components/buttons/Button";
import InputText from "../src/components/inputs/InputText";
import InputTextArea from "../src/components/inputs/InputTextArea";
import InputCheckBox from "../src/components/inputs/InputCheckBox";
import InputRadioButton from "../src/components/inputs/InputRadioButton";
import InputSelect from "../src/components/inputs/InputSelect";
import Modal from "../src/components/modal/Modal"
function App() {
  const items = ["Prueba1", "Prueba2", "Prueba3"]
  return (
    <>
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
        <InputSelect items={items}/>
        <br></br>
        <Modal isOpen content={<div><span>Pruebas pruebas</span></div>}/>
      </div>
    </>
  )
}

export default App
