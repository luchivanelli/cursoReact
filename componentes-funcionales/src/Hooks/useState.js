import { useState } from "react" //useState es un hook

// reglas de los hooks:
// -no se llaman en loops, ni condicionales.
// -se llaman en el nivel mas alto del componente
// -se llaman en 2 partes o lugare: en componentes funcionales o en custom hooks (personalizados)
// -cuando creamos un custom hook, debe empezar por use+nombre 

const useContador = (inicial)=> {  //custom hook
    const [contador, setContador] = useState(inicial)
    const incrementar = ()=> {
        setContador(contador+1)
    }

    return [contador, incrementar]
}

const App = ()=> {
    // const [contador, setContador] = useState(0)
    // useState devuelve un arreglo de longitud 2. El primer elemento será en este caso, el contador (su valor inicial será 0 ya que es lo que le estamos pasando como argumento), y el 2do elemento será la funcion setContador que permitirá que el contador vaya cambiando de valor
    // const incrementar = ()=> {
    //     setContador(contador+1)
    // }

    const [contador, incrementar] = useContador(0)
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App 