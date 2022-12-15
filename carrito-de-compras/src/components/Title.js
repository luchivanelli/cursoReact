import { Component } from "react";

const styles = {
    title: {
        fontSize: '30px',
        textAling: 'center',
        letterSpacing: '2px',
        marginBottom: '60px',
        textAlign: 'center'
    }
}

class Title extends Component {
    render () {
        return (
            <h3 style={styles.title}>Verdulería Don Olivo</h3>
        )
    }
}

export default Title