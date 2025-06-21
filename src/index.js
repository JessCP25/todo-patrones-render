import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App(props){
  return(
    <h2>¡{props.saludo}, {props.nombre}!</h2>
  )
}

function withSaludo(WrapperComponent){
  return function WrappedComponentWithSaludo(saludo){
    return function ComponenteDeVerdad(props){
      return (
        <>
          <WrapperComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </>
      )
    }
  }
}

const AppWithSaludo = withSaludo(App)('Hey');

ReactDOM.render(
  <AppWithSaludo nombre="Jessica" />,
  document.getElementById('root')
);
