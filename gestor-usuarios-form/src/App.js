import { useState } from "react";
import './App.css'
import Container from "./components/Container"
import Input from "./components/Input"
import Button from "./components/Button"


const App = ()=> {
  const [formulario, setFormulario] = useState({name: '', lastname: '', email: ''})
  const [usuarios, setUsusarios] = useState([])

  const handleChange = (e)=> {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const reset = ()=> {
    setFormulario({name: '', lastname: '', email: ''})
  }

  const submit = (e)=> {
    e.preventDefault()
    setUsusarios([
      ...usuarios,
      formulario
    ])
    
    reset()
  }

  return (
    <Container>
      <form className="form" onSubmit={submit}>
        <Input label='Nombre' name='name' onChange={handleChange} value={formulario.name} />
        <Input label='Apellido' name='lastname' onChange={handleChange} value={formulario.lastname} />
        <Input label='Email' name='email' onChange={handleChange} value={formulario.email} />
        <Button>Enviar</Button>
      </form>
      <div className="div">
        <h3>Usuarios:</h3>
        <ul>
          {usuarios.map(x=> 
            <li key={x.name}>{`${x.name} ${x.lastname} - ${x.email}`}</li>
          )}
        </ul>
      </div>
    </Container>
  );
}

export default App;
