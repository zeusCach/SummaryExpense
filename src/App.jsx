import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"
import { useReducer } from "react";
import { ExpenseReducer, inicialState } from "./reducer/appReducer";
import NavigatorDown from "./components/NavigatorDown";


function App() {
  return (
    <>
      <Navigator />
      <AppRoutes />
      <NavigatorDown />
      <Footer />
    </>
  )
}

export default App
