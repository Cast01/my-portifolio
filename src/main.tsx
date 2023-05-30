import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MenuMobileContextProvider } from './contexts/MenuMobileContext'
import { GlobalStyle } from './globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <MenuMobileContextProvider>
      <App />
    </MenuMobileContextProvider>
  </React.StrictMode>
)
