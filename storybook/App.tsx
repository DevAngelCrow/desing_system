
import './App.css'
import Button from "../src/components/buttons/Button";
import InputText from "../src/components/inputs/InputText";
import InputTextArea from "../src/components/inputs/InputTextArea";
import InputCheckBox from "../src/components/inputs/InputCheckBox";
function App() {

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
      </div>
    </>
  )
}

export default App
