import { Component } from "react";

const styles = {
    layout: {  //va a centrar todo el contenido
        backgroundColor: '#fff',
        color: '#0a283e',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    
    container: {  //el contenido va a estar en un ancho de 800px
        width: '800px'
    }
}

class Layout extends Component {  //componente contenedor
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                    {/* <p>Hola</p>  este contenido va a estar dentro de los 800px pero no centrado, es decir, arranca desde la izquierda */}
                </div>
            </div>
        )
    }
}

export default Layout