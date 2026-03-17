import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"
import { useReducer } from "react";
import { ExpenseReducer, inicialState } from "./reducer/appReducer";
import NavigatorDown from "./components/NavigatorDown";
import { useLocation } from "react-router-dom";


function App() {
  //nos brinda la ruta actual
  const location = useLocation();

  //comprobamos si nuestra ruta actual es el home: devuelve true o false
  const isHome = location.pathname === "/"
  console.log(isHome);

  return (
    <>
      {/* condicion de isHome, si la ruta es la principal, solo muestra nuestro home sin footer y sin acceso a la navegacion */}
      {!isHome && <Navigator />}
      <AppRoutes />
      {!isHome && <NavigatorDown />}
      {!isHome && <Footer />}
    </>
  )
}

export default App
