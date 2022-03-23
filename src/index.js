import React from 'react';
import ReactDOM from 'react-dom';

// our root section
import App from './App';

// redux store 
import {store} from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
     <App/>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

