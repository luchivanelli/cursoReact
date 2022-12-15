// los componentes funcionales son funciones puras, su valor de retorno no cambia

const MiComponente = ({miProp})=> {
  return (
    <div>
      Hola {miProp} 
    </div>
  )
}

const App = ()=> {
  return (
    <MiComponente miProp= {'Mundo'} />
  )
}

export default App;
