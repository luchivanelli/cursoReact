import {Component} from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: 'productos/tomate.jpg'},
      {name: 'Arvejas', price: 2500, img: 'productos/arvejas.jpg'},
      {name: 'Lechuga', price: 500, img: 'productos/lechuga.jpg'}
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {  //el argumento "producto" se pasa cuando se ejecuta la funcion, en el componente Producto
    const {carro} = this.state  //destructuring
    if (carro.find(x => x.name === producto.name)) {  //busca si ya existe el producto en el carro
      const newCarro = carro.map(x =>   //crea un nuevo carro, recorre el carro original
        x.name === producto.name ? ({  //si el producto a agregar es el mismo que el producto que está en el carro..
          ...x,  //agrega el producto y toda sus propiedades
          cantidad: x.cantidad + 1  //y tambien crea y le suma 1 a la propiedad cantidad
        })
        : x)  // si no es, solo agrega el producto al nuevo carro (sin sumarle la cantidad, ya que no es el mismo producto)
      return this.setState({carro: newCarro})
    }

    return this.setState({  //si el producto no está en el carro, se ejecuta esto
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }


  mostrarCarro = ()=> {  //cambia la variable de false a true y viceversa
    if (!this.state.carro.length) {  //si no hay elementos, la funcion no hace nada. Por lo tanto, no se va a deplegar el menú
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }


  render() {
    return (
      <div>
        <Navbar 
          carro= {this.state.carro} 
          esCarroVisible= {this.state.esCarroVisible} 
          mostrarCarro= {this.mostrarCarro}
        />
        <Layout>
          <Title/>
          <Productos //componente que va a imprimir cada uno de los productos (no va a hacer falta imprimir uno por uno)
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
