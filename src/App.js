import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {

  state = {
    citas: []
  }

  //cuando la aplicacion carga
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS) {
      this.setState({
        citas : JSON.parse(citasLS)
      })
    }
  }

  //cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    localStorage.setItem('ctias', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //copiar el state actual
    const citas = [...this.state.citas, datos];

    //agregar nuevo states
    this.setState({
      citas
    });
  }

  //elimina las citas del states
  eliminarCita = id => {
    console.log(id);
    console.log('diste click');
    //primero tomar una copia del state, nunca debes mutar el state directamente
    //siempre que se modifique el state tomar una copia
    const citasActuales = [...this.state.citas];
    console.log(citasActuales);
    //utilizar filter para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id)
    console.log(citas);
    //finalmente actualizar el state
    this.setState({
      citas
    })
  }

  render() {
    return ( 
      <div className="container">
        <Header
          titulo='app-veterinaria'
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita
                crearNuevaCita={this.crearNuevaCita}  
              />
            </div>
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
            </div> 
      </div>
      );
  }
}

export default App;
