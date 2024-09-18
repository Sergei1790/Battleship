import '../css/style.css';
import {Ship} from './classes.js';
import './DOM.js';
// import './classes.js';
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

let ship = new Ship(3)
console.log('ship' ,ship);
