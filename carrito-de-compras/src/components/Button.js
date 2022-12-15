import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#FFF',
        padding: '10px 15px',
        borderRadius: '10px',
        letterSpacing: '1px',
        border: 'none',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button