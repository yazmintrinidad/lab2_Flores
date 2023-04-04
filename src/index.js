                  //LABORATORIO N°2                           Yazmin Flores

import React, {useState}from 'react';
import ReactDOM from 'react-dom';
/*

class App extends React.Component{
  state ={contador: 0}
  render(){
    return(
      <div>
        <span>El contador esta a {this.state.contador}</span>
        <br></br>
        <button onClick={() => this.setState({ contador: this.state.contador + 1})}>
          Incrementar Contador
        </button>
        <button onClick={() => this.setState({ contador: this.state.contador - 1})}>
          Decrementar Contador
        </button>
      </div>
    )
  }
}


*/

function App(){
const [count, setCount] = useState(0)

return (
  <center>
  <div>
    <h2>LABORATORIO N°2</h2>
    <h3>Contador con Temporisador</h3>
    <span><b>El contador esta a : </b> <b>{ count}</b> </span><br></br>
    <br></br>
    <button  onClick={() => setCount(count + 1)}><b> Incrementar </b></button>
    <button onClick={() => setCount(0)}> <b>Restablecer</b> </button>
    <button onClick={() => setCount(count - 1)}> <b>Decrementar</b> </button>
  </div>
  </center>
)
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



