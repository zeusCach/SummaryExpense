import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextProvider } from './context/userContext.jsx'
import { BrowserRouter } from 'react-router-dom'

import CardContextProvider from './context/cardContext.jsx'
import AmountContextProvider from './context/amountContext.js'
import ExpensesContextProvider from './context/ExpensesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ExpensesContextProvider>
          <CardContextProvider>
            <AmountContextProvider>
              <App />
            </AmountContextProvider>
          </CardContextProvider>
        </ExpensesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
