import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#e9725a',
        color: '#fff',
        padding: '3px 8px',
        borderRadius: '15px',
        fontSize: '12px'
    }
}

class BubbleAlert extends Component {  //Este componente es el cartel de cantidad de productos agregados al carro
    getNumber(n) {
        if (!n) { return '' }  //si n no existe, no va a aparecer el span
        return n > 9 ? '9+' : n 
    }

    render() {
        const {value} = this.props
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert