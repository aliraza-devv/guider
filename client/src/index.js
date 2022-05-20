import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react';

import App from './App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain="dev-it6ek9g5.us.auth0.com" 
      clientId="Nua7TRNTncvbKy4Q4qpY7PmO7dPexyQm" 
      redirectUri="http://localhost:3000/profile" 
      audience="Unique" 
      scope="openid profile email"
    >
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
