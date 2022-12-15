import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        padding: '10px 15px',
        fontSize: '20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
    },

    bubble: {
        position: 'relative',
        left: '14px',
        top: '16px'
    }
}

class Carro extends Component {
    render() {
        const {carro, esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) //reduce explicado en la clase 16
        return (
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0  //si no hay productos en el carrito, la alerta no se va a mostrar
                    ? <BubbleAlert value= {cantidad} /> 
                    : null}
                </span>
                <button style={styles.carro} onClick= {mostrarCarro}>
                    Carrito
                </button>
                {esCarroVisible ? <DetallesCarro carro= {carro} /> : null}  {/*Si es verdadera, muestra el menu*/}
            </div>
        )
    }
}

export default Carro