import logo from './logo.svg';
// import './App.css';
import './main.css'  //importamos archivo css


const Div = ({children}) => {
  return(
    <div className= "div-container">{children}</div>
  )
}

const App = () => {
  return(
    <div>
      <Div><p className= "title">Hola Mundo</p></Div>
      <Div><p className= "texto">Esto es una prueba para el curso de React</p></Div>
    </div>
  );
}

export default App;
