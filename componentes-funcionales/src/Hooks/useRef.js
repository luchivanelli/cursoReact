import { click } from "@testing-library/user-event/dist/click"
import { useRef } from "react"

const App = ()=> {
    const ref = useRef()
    const refInput = useRef()

    const click = ()=> {
        console.log(ref.current) //con la propiedad current podemos acceder a los elementos y sus propiedades
    }
    const focus = ()=> {
        refInput.current.focus()
    }

    return (
        <div>
            <div ref={ref} onClick={click}>Haciendo foco</div>
            <input ref={refInput}/>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default App