
import './App.css'
import Button from "../src/components/buttons/Button";
import InputText from "../src/components/inputs/InputText";
function App() {

  return (
    <>
      <div className='flex flex-col'>
        <Button className="bg-secondary text-primary" label="Botón" icon={{ name: "Alarm", position: "right" }}
          onClick={() => console.log("onClick")} />
          <br></br>
        <InputText outline label='Prueba' />
        <br></br>
      </div>
    </>
  )
}

export default App
