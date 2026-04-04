import { Route, Routes } from "react-router-dom";
import Configuration from "../pages/Configuration";
import FormExpense from "../pages/FormExpense";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import StartSummary from "../pages/StartSummary";
import MoreSummary from "../pages/MoreSummary";
import CardSection from "../pages/CardSection";
import FormBank from "../pages/FormBank";
import StatisticsExpenses from "../pages/StatisticsExpenses";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
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