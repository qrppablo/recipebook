import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// importamos las funciones createStore y applyMiddleware de redux
import { createStore, applyMiddleware } from 'redux';
// importamos redux-thunk
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import './styles.scss';

// le pasamos applyMiddleware(thunk) como segundo argumento a createStore.
// Cuando aplicamos middleware en redux-thunk, cada vez que se dispatchea
// una accion, esa misma accion primero se envia a redux-thunk como un
// middleware y despues redux-thunk envia la accion a todos los reducers.
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);