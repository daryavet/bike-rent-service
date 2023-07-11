import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { getToken } from './services/tokenService';
import { fetchMe } from './redux/user/userSlice';
import store from './redux/store'
import "./index.scss"
import App from './App';



if(getToken()){
  store.dispatch(fetchMe())
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Provider store={store}>
   <App/>
    
  </Provider>
</React.StrictMode>
);