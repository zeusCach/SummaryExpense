import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"
import { useReducer } from "react";
import { ExpenseReducer, inicialState } from "./reducer/appReducer";


function App() {
  //https://youtube.com/shorts/5AAMKbfcdco?si=SkgoIWPzqae50NtT

  return (
    <>
      <Navigator />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
