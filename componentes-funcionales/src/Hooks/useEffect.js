import { useState, useEffect } from "react"

const useContador = (inicial)=> {  //custom hook
    const [contador, setContador] = useState(inicial)
    const incrementar = ()=> {
        setContador(contador+1)
    }

    return [contador, incrementar]
}

const App = ()=> {
    const [contador, incrementar] = useContador(0)
    useEffect(()=> {
        document.title = contador
    }, [contador])
    // useEffect toma 2 argumentos, el primero es la lógica (una funcion), y el segundo son las dependencias (declaradas en arreglos), es decir, cuando se va a ejecutar
    // si no pasamos el 2do argumento, useEffect  se ejecutará siempre que se renderice nuestra app.
    // si le pasamos un arreglo vacio, se ejecutará una sola vez
    // si le pasamos "contador", se ejecutará cuando cambie el valor de esa variable
    return (
        <div>
            Contador: {contador}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default App