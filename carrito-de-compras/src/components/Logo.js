import { Component } from "react";

const styles = {
    logo: {
        fontSize: '26px',
        fontWeight: '700'
    }
}

class Logo extends Component {
    render() {
        return (
            <div style={styles.logo}>
                donOlivo
            </div>
        )
    }
}

export default Logo