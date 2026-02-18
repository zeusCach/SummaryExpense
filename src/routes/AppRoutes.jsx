import { Route, Routes } from "react-router-dom";
import ViewPrincipal from "../components/ViewPrincipal";
import Configuration from "../pages/Configuration";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<ViewPrincipal />} />
            <Route path="/cuenta" element={<Configuration />} />
            <Route path="/estadisticas" element={<Configuration />} />
        </Routes>
    )
}