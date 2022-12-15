import { useRef } from "react"

const App = ()=> {
    const input = useRef()
    const file = useRef()

    const submit = ()=> {
        const form = new FormData()  //creamos un formulario a traves de formdata
        form.append('email', input.current.value)  //agregamos el input email al form
        form.append('foto', input.current.files[0])  //agregamos la foto al form
        fetch('/formulario.com', {method: 'POST', body: form})  //enviamos el form a traves del metodo post
    }

    return(
        <div>
            <div>
                <span>Email:</span>
                <input type='text' name="email" ref={input}/>
            </div>
            <div>
                <span>Foto:</span>
                <input type='file' name="foto" ref={file}/>
            </div>
            <input type='submit' value='Enviar' onClick={submit}/>
        </div>
    )
}

export default App