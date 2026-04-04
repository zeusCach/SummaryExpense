import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRoutes"
import NavigatorDown from "./components/NavigatorDown";
import { useLocation } from "react-router-dom";

//Creamos nuestras rutas publicas para mejor performace
const PUBLIC_ROUTES = ['/', '/datos'];

function App() {
  //nos brinda la ruta actual
  const location = useLocation();

  // Comprueba si la ruta actual esta en la lista de rutas publicas
  const isPublic = PUBLIC_ROUTES.includes(location.pathname)
  console.log(isPublic);

  return (
    <>
      {/* condicion de isHome, si la ruta es la principal, solo muestra nuestro home sin footer y sin acceso a la navegacion */}
      {!isPublic && <Navigator />}
      <main className={!isPublic ? "pb-24 md:pb-0" : ""}>
        <AppRoutes />
      </main>
      {!isPublic && <NavigatorDown />}
      {!isPublic && <Footer />}
    </>
  )
}

export default App
