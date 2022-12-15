import { useReducer, useState } from "react"

// const state = {contador: 0}
// action = {type: string, payload: any} (type es el tipo de accion y payload es data opcional)

const inicial = {contador: 0}

const reducer = (state, action)=> {  //cumple la misma funcion que el metodo reduce
    switch (action.type) {   //acá nos preguntamos que tipo de accion es
        case 'incrementar':
            return {contador: state.contador + 1}
        case 'decrementar':
            return {contador: state.contador - 1}
        case 'set':
            return {contador: action.payload}
        default:
            return state
    }
}

const App = ()=> {
    const [state, dispatch] = useReducer(reducer, inicial)  //dispatch tiene las propiedades de action (type y payload)
    const [valor, setValor] = useState(0)

    return (
        <div>
            Contador: {state.contador}
            <input valor= {valor} onChange={e=> setValor(e.target.value)}/>
            <button onClick={()=> dispatch({type: 'incrementar'})}>Incrementar</button>
            <button onClick={()=> dispatch({type: 'decrementar'})}>Decrementar</button>
            {/* <button onClick={()=> dispatch({type: 'set', payload: 0})}>Set</button>  resetea el contador */}
            <button onClick={()=> dispatch({type: 'set', payload: valor})}>Set</button>  {/*actualiza el valor correspondiente del input*/}
        </div>
    )
}

export default App