import './App.css';

const submit = (e)=> {
  e.preventDefault()  //la app no se va a actualizar al enviar el form
  const data = Array.from(new FormData(e.target))  //transforma el formulario en un array "data" que contientiene 2 array dentro (ya que nuestro form tiene 2 input, sin contar el submit). Cada uno de esos array, a si mismo, contiene el valor del atributo "name" de los input, y tambien el contenido del mismo (lo que escribe el usuario) Ej: [[nombre, Nancy], [apellido, Pilla]]
  console.log(Object.fromEntries(data))  //Tranforma el array "data" en un objecto. Ej: data= {nombre: 'Nancy', apellido: 'Pilla'}
}

function App() {
  return (
    <form onSubmit={submit}>
      <div>
        <span>Nombre:</span>
        <input name='nombre'/>
      </div>
      <div>
        <span>Apellido:</span>
        <input name='apellido'/>
      </div>
      <div>
        <span>Foto:</span>
        <input name='foto' type='file'/>
      </div>
      <input type='submit' value='Enviar'/>
    </form>
  )
}

export default App;
