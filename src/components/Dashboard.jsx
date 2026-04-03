import { Link, useNavigate } from "react-router-dom";
import InfoSummary from "./InfoSummary";
import Summary from "./Summary";
import { useUser } from "../hooks/useUser";
import { useCalculateExpense } from "../hooks/useCalculateExpenses";


export default function Dashboard() {
    const { state } = useUser();
    const navigate = useNavigate();
    const { excedePresupuesto } = useCalculateExpense();
    return (
        <>
            <div className="flex items-center justify-between m-10">
                <p className="text-slate-500 font-bold">
                    @{state.user}
                </p>

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