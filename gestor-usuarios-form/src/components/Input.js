import './Input.css'

const Input = ({label, ...resto})=> {
    return (
        <div className="container-input">
            <label>{label}</label>
            <input {...resto}></input>
        </div>
    )
}

export default Input