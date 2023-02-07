import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/context'
import { FilterProvider } from './context/FilterContext'
import { CartProvider } from './context/CartContext'
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const clientId = import.meta.env.VITE_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </CartProvider>
      </FilterProvider>
    </AppProvider>


  </Auth0Provider>
)
