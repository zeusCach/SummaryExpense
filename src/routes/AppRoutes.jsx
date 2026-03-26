import { Route, Routes } from "react-router-dom";
import Configuration from "../pages/Configuration";
import FormExpense from "../pages/FormExpense";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import StartSummary from "../pages/StartSummary";
import MoreSummary from "../pages/MoreSummary";


export default function AppRoutes(dispatch) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datos" element={<StartSummary />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cuenta" element={<Configuration />} />
            <Route path="/estadisticas" element={<Configuration />} />
            <Route path="/expenses" element={<MoreSummary />} />
            <Route path="/registrar" element={<FormExpense />} />
            <Route path="/edit/:id" element={<FormExpense />} />
        </Routes>
    )
}