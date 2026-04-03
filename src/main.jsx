import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

import CardContextProvider from './context/cardContext.jsx'
import AmountContextProvider from './context/amountContext.js'
import ExpensesContextProvider from './context/ExpensesContext.jsx'
import UserContextProvider from './context/userContext.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

      <ExpensesContextProvider>
        <CardContextProvider>
          <AmountContextProvider>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </AmountContextProvider>
        </CardContextProvider>
      </ExpensesContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
