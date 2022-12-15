import { Component } from "react"

class App extends Component { //Creamos componente de clase
    state = {  //Creamos estado (siempre debe llamarse state)
        valor: 1
    }
    render() {  //El metodo render siempre debe estar
        console.log(this.state)
        return (
            <div>
                <p>Hola mundo</p>
                <button 
                className={this.state.valor}  //Designamos el estado del componente a su clase (cuando el estado cambie, la clase tambien)
                onClick={()=> this.setState({valor: 2})} //Con setState, cambiamos o actualizamos el estado
                >
                    Enviar
                </button>
            </div>
        )
    }
}

//Más explicacion de renderizado en la clase 32

export default App