import './Button.css'

const Button = (props)=> {  //Creando componente reutilizable
    return (
        <button {...props} className= "btn" />
    )
}

export default Button;