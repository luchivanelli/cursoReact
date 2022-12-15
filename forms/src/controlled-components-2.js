import { useState } from "react"

const App = ()=> {
    const [value, setValue] = useState({
        input: '',
        texto: 'Podemos agregar valores por defecto',
        select: '',
        checkbox: 'false',
        radio: 'argentina'
    })
    const handleChange = (e)=> {
        setValue((state)=> ({
            // ...state,  // state es lo que valga 'value' en ese momento
            // [e.target.name]:     e.target.value  // y aca el agrega el nuevo cambio
            //        |                     |
            //        v                     v
        //'input'-'texto'-'select'   valor del input correspondiente
        

        // con el input checkbox, tenemos un error al pasar como valor del estado 'e.target.value', entonces:
            ...state,  
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
            //preguntamos si el input es un checkbox, si es asi, el valor va a ser 'e.target.checked'
            //esto retorna false o true, en cambio el .value retorna 'on'

        }))
    }

    console.log(value)

    return(
        <div>
            <input type='text' name="input" value={value.input} onChange={handleChange} />
            <textarea name="texto" value={value.texto} onChange={handleChange} />
            <select name="select" value={value.select} onChange={handleChange} >
                <option value=''>--Selecionar una opción--</option>
                <option value='boca juniors'>Boca Juniors</option>
                <option value='river plate'>River Plate</option>
                <option value='racing'>Racing</option>
                <option value='independiente'>Independiente</option>
            </select>
            <input type='checkbox' name="checkbox" value={value.checkbox} onChange={handleChange} />
            <div>
                <label>País:</label>
                <input
                type='radio'
                name='radio'
                value='argentina'
                onChange={handleChange}
                checked={value.radio === 'argentina'} //si devuelve true, se selecciona
                /> Argentina
                <input
                type='radio'
                name='radio'
                value='brasil'
                onChange={handleChange}
                checked={value.radio === 'brasil'}
                /> Brasil
                <input
                type='radio'
                name='radio'
                value='uruguay'
                onChange={handleChange}
                checked={value.radio === 'uruguay'} 
                /> Uruguay
            </div>
        </div>
    )
}

export default App