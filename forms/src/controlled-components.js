import { useState } from "react"

const App = ()=> {
    const [value, setValue] = useState('')  //manejamos el estado de value
    const handleChange = (e)=> {
        setValue(e.target.value)  //value se actualiza cada vez que haya un cambio en el input
    }

    return (
        <div>
            <input type='text' name="normal" value={value} onChange={handleChange} />

            {/* Al tener el valor del input sincronizado, podemos crear validaciones */}
            {(value.length < 5 ? <span>El texto debe contener mas de 5 caracteres</span> : null)}
        </div>
    )
}


export default App
