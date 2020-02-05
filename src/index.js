<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import App from './core/App'
import * as serviceWorker from './serviceWorker'

const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './core/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 1917771f8254d9ca0ae24e493463b559dfcae4f3

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
<<<<<<< HEAD
serviceWorker.unregister()
=======
serviceWorker.unregister();
>>>>>>> 1917771f8254d9ca0ae24e493463b559dfcae4f3
