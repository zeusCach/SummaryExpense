import { Link, useNavigate } from "react-router-dom";
import InfoSummary from "./InfoSummary";
import Summary from "./Summary";
import { useUser } from "../hooks/useUser";
import { useCalculateExpense } from "../hooks/useCalculateExpenses";
import { useEffect, useState } from "react";

const mensajes = [
    "Hola de nuevo",
    "Que tal, aquí lo dejaste",
    "Sigue tu viaje",
    "¡Qué bueno verte!",
    "¡Bienvenido! ¿Cómo estás hoy?"
];

//Obtiene un mensaje aleatorio de nuestro pipe de mensajes de saludos 
const getMensaje = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function Dashboard() {
    const [saludo, setSaludo] = useState("");
    const { state } = useUser();
    const { excedePresupuesto } = useCalculateExpense();
    const navigate = useNavigate();

    useEffect(() => {
        setSaludo(getMensaje(mensajes));
    }, []);
    return (
        <>
            <div className="flex items-center justify-between m-10">
                <div className="flex items-center gap-2">
                    <p className="text-white font-bold">{saludo}</p>
                    <p className="text-white font-bold">
                        @{state.user}
                    </p>
                </div>

                <button
                    disabled={excedePresupuesto}
                    onClick={() => navigate('/registrar')}
                    className={`bg-orange-500 hover:bg-orange-600 text-white 
                        font-bold px-4 py-2 rounded-lg cursor-pointer
                        disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                    Añadir gasto
                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 pb-8 flex-1 overflow-hidden">
                <div className="overflow-y-auto">
                    <Summary />
                </div>
                <div className="overflow-hidden">
                    <InfoSummary />
                </div>
            </div>
        </>
    )
}          