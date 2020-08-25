// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './components/App';
// const element = <h1>Hello, Platzi Badges!</h1>;
const container = document.getElementById('app');

// Alternativa para JSX
// React.createElement(tipoDeElemento, atributos o props{}, children o inner text)
// const element = React.createElement('a', { href: 'http://platzi.com' }, 'Ir a Platzi');
// const name = 'Emanuel'
// const jsx = <h1>Hola soy ${name}</h1>
// const element = React.createElement('h1', {}, `Hola soy ${name}`);
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
    <App />,
    container);
