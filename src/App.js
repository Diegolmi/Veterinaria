import React from 'react';
import Nav from './components/nav';
import Body from './components/body';
import Section from './components/section'
import Tienda from './components/tienda'
// import logo from './descarga.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Formulario from './components/veterinaria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <Nav />
        
         
       
      </header>
      <section>
          
          <Body />
      </section>
      <section>
          <Section />

      </section>
      <section>

        < Tienda />

      {/* <Formulario /> */}

      </section>

     
    </div>
  );
}

export default App;
