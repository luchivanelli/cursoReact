import { Component } from 'react'
import Producto from './Producto'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props  //destructuring

        return (
            <div style={styles.productos}>
                {productos.map(producto =>  //imprimiendo productos
                    <Producto
                    agregarAlCarro= {agregarAlCarro}
                    key= {producto.name}  //cada producto tiene como key su nombre
                    producto= {producto}
                    />)}
            </div>
        )
    }
}

export default Productos