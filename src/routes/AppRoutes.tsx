import { Navigate, Route, Routes } from "react-router-dom";
import Configuration from "../pages/Configuration";
import FormExpense from "../pages/FormExpense";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import StartSummary from "../pages/StartSummary";
import MoreSummary from "../pages/MoreSummary";
import CardSection from "../pages/CardSection";
import FormBank from "../pages/FormBank";
import StatisticsExpenses from "../pages/StatisticsExpenses";
import { useUser } from "../hooks/useUser";


export default function AppRoutes() {

    //hook que trae el contexto del reduce user para controlar autenticacion simulada
    const { state } = useUser();

    // const privateRoute = ({ user, children }: any) => {
    //     return user ? children : <Navigate to="/" replace />
    // }

    return (
        <Routes>

            {/* Ruta principal que controla la autenticacion */}
            <Route
                path="/"
                element={
                    state.user
                        ? <Navigate to="/dashboard" replace />
                        : <Home />
                }
            />

            {/* Rutas alternar de navegacion */}
            <Route path="/datos" element={<StartSummary />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cuenta" element={<Configuration />} />
            <Route path="/tarjetas" element={<CardSection />} />
            <Route path="/registrar-card" element={<FormBank />} />
            <Route path="/estadisticas" element={<StatisticsExpenses />} />
            <Route path="/expenses" element={<MoreSummary />} />
            <Route path="/registrar" element={<FormExpense />} />
            <Route path="/edit/:id" element={<FormExpense />} />
        </Routes>
    )
}