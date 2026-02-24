import { Route, Routes } from "react-router-dom";
import ViewPrincipal from "../components/ViewPrincipal";
import Configuration from "../pages/Configuration";
import FormExpense from "../pages/FormExpense";


export default function AppRoutes(dispatch) {
    return (
        <Routes>
            <Route path="/" element={<ViewPrincipal />} />
            <Route path="/cuenta" element={<Configuration />} />
            <Route path="/estadisticas" element={<Configuration />} />
            <Route path="/registrar" element={<FormExpense />} />
        </Routes>
    )
}