import styled, {keyframes} from 'styled-components'

const Container = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
const P = styled.p`
  font-size: 24px;
  color: red;
`
const Button = styled.button`
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  border: 2px solid red;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  width: 80px;
  text-align: center;
  transition: box-shadow 0.5s;

  &.claseBoton {  //clase para los botones, se aplican los estilos a aquellos botones que contengan la clase
    border: 2px solid blue;
    background-color: black;
    color: white;
  }

  .claseDentroDeButton {  //clase para los elementos que se encuentren dentro de los botones, ej: un parrafo
    font-size: 28px;
  }
  
  &:hover {  //el hover se aplica cuando pasamos por encima de un boton
    box-shadow: 3px 3px 5px black;
  }

`
const BlockButton = styled(Button)` //tiene las mismas propiedades que button y tambien las nuevas
  width: 100%;
  font-size: 20px
`

const Link = ({className, ...props}) => {
  return (
    <a className={className} {...props}></a>
  )
}

const LinkStyled = styled(Link)`  //damos estilo a un componente ya construido
  color: blue;
  font-size: 20px;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red' //asignamos el valor de color a traves de las props, o se establece el predeterminado
  //aunque le pasemos un valor a color, no va a cambiar el estilo si no declaramos que color sea = props.color
}))`
  border: 4px solid red;
  color: ${props => props.color}; //se asigna el valor que tenga la prop color (predeterminada o la que le hayamos pasado) SIEMPRE HAY QUE PONER ESTO, CUANDO QUEREMOS QUE UN ESTILO SEA DINAMICO
  color: ${props => (props.color) === 'blue' ? (props.color) = 'green' : null};  //tambien se puede evaluar una condicion
`

const Password = styled(Input).attrs({  //creamos un componente con las misma propiedades que Input, y le cambiamos el type, y tambien algunos estilos
  type: 'password'
})`
  color: ${props => props.color};
  font-size: 24px;
  border-color: purple;
`

const animacion = keyframes`  //luego de importar keyframes, creamos la animacion
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Div = styled.div`
  animation: ${animacion} 2s linear infinite; //asignamos animacion al div
`

function App() {
  return (
    <Container>
        <P>Hola soy un texto</P>
        <Button>Log in</Button>
        <Button primary={true}>Sign up</Button> {/*poner primary=true o primary solo, es lo mismo*/}
        <Button className='claseBoton'>Boton con clase</Button>
        <Button><p className='claseDentroDeButton'>Hola como estas?</p></Button>
        <BlockButton>Block Button</BlockButton>
        <BlockButton primary as='a' href= '#'>Block button link</BlockButton> {/*con as, indicamos que el boton se va a comportar como una etiqueta a*/}
        <Link>Link</Link>
        <LinkStyled>Link con estilo</LinkStyled>
        <Input color='blue'/>
        <Password color='purple'/>
        <br/>
        <Div>Animacion</Div>
    </Container>
  );
}

export default App;
