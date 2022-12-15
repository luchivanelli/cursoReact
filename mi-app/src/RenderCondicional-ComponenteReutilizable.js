import Button from './Button'

const arr = ["Luciana", "Camila", "Bailey"]

const App = () => {

    // Renderizado condicional
    const miVariable = false;
    if (miVariable) {
        return (  //Esto se renderiza si miVariable existe
            <p>La variable dió true asi que renderizaremos este return</p>
        )
    }

    return (
        <div>
            <h3>Hola Mundo</h3>
            { arr.map(el => <p key= {el}>{el}</p>)}  {/* Cada elemento de una lista debe tener una key unica (en este caso le ponemos el mismo elemento) */}
            <Button onClick= {()=>console.log("Clickeado")}>
                Enviar
            </Button>
        </div>
    )
}

export default App;