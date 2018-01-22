import {createStore} from 'redux';
import {createDecrement, createIncrement} from './actionCreators';
import reducer from './reducer';

const store = createStore(reducer); // < ---

const app = document.createElement('div');
const text = document.createElement('h1');
text.innerText = 0; 

const incre = document.createElement('button');
incre.innerText = "+";
incre.onclick = () => {
    store.dispatch(createIncrement()); // < ---
}

const decre = document.createElement('button');
decre.innerText = "-";
decre.onclick = () => {
    store.dispatch(createDecrement()); // < ---
}

app.appendChild(incre);
app.appendChild(text);
app.appendChild(decre);

store.subscribe( () => {
    text.innerText = store.getState().count; // < ---
});

export default app;