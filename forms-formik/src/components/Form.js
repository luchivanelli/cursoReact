import { useFormik } from "formik"
import './Form.css'

const validate = (values) => {  //funcion para validar errores
    const errors = {}

    if (!values.name) {
      errors.name= 'Campo requerido'
    } else if (values.name.length < 3) {
        errors.name= 'Longitud minima: 3 caracteres'
    }

    if (!values.lastname) {
      errors.lastname= 'Campo requerido'
    } else if (values.lastname.length < 3) {
        errors.lastname= 'Longitud minima: 3 caracteres'
    }

    if (!values.email) {
      errors.email = 'Campo requerido'
    } else if (values.email.length < 8){
        errors.email= 'Longitud minima: 8 caracteres'
    }

    if(!values.estadoCivil) {
        errors.estadoCivil = 'Campo requerido'
    }

    if(!values.equipo) {
        errors.equipo = 'Campo requerido'
    }

    return errors
}

const Form = ()=> {
    const formik = useFormik({
        initialValues: {  //valores iniciales de los inputs
          name: '',
          lastname: '',
          email: '',
          hijos: 'false',
          licencia: 'false',
          estadoCivil: '',
          equipo: ''
        },
        validate, //funcion previamente hecha (validaciones de errores)
        onSubmit: values => console.log(values)  //funcion que se ejecuta al apretar el boton submit
      })
      return (
        <form onSubmit={formik.handleSubmit} className='form'>
            <div className="form-div">
                <label>Nombre:</label>
                <input
                name='name'
                type='text'
                onChange={formik.handleChange} //actualiza el valor del input (en los valores iniciales), a medida que se va escribiendo
                onBlur={formik.handleBlur} //sirve para que valide solo al hacer foco en el campo
                value={formik.values.name}
                className='input-text'
                />
            {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}  {/*si se hace foco y si el error existe, se imprime en un p*/}
            </div>
            <div className="form-div">
                <label>Apellido:</label>
                <input type='text' {...formik.getFieldProps('lastname')} className='input-text'/> 
                {/*getFieldProps contiene todas las propiedades que debe tener nuestro campo (como el de name), menos el type
                Esto hace que nuestro codigo sea menor y mas limpio*/}
                {formik.touched.lastname && formik.errors.lastname ? <p>{formik.errors.lastname}</p> : null}
            </div> 
            <div className="form-div">
                <label>Email:</label>
                <input type='email' {...formik.getFieldProps('email')} className='input-text'/>
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <div className="form-div">
                <label>Hijos:</label>
                <input type='checkbox' {...formik.getFieldProps('hijos')} className='input-check'/>
            </div>
            <div className="form-div">
                <label>Licencia de conducir:</label>
                <input type='checkbox' {...formik.getFieldProps('licencia')} className='input-check'/>
            </div>
            <div className="form-div">
                <label>Estado civil:
                <label className="label-radio">Casad@</label>
                <input 
                name='estadoCivil'
                type='radio'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value='Casado'
                className='input-radio'
                />
                <label className="label-radio">Divorciad@</label>
                <input
                name='estadoCivil'
                type='radio'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value='Divorciado'
                className='input-radio'
                />
                <label className="label-radio">Solter@</label>
                <input 
                name='estadoCivil'
                type='radio'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value='Soltero'
                className='input-radio'
                />
                </label>
                {formik.touched.estadoCivil && formik.errors.estadoCivil ? <p>{formik.errors.estadoCivil}</p> : null}
            </div>
            <div className="form-div">
            <label>Equipo de futbol:</label>
                <select type='select' {...formik.getFieldProps('equipo')} className='input-select'>
                    <option>Boca</option>
                    <option>River</option>
                    <option>Central</option>
                    <option>Newells</option>
                </select>
                {formik.touched.equipo && formik.errors.equipo ? <p>{formik.errors.equipo}</p> : null}
            </div>
            <button type='submit' className='input-submit'>Enviar</button>
        </form>
      )
}

export default Form