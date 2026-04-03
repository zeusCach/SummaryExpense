import { useContext, useMemo } from "react";
import { UserContext } from "../context/userContext";
import { useAmount } from "../hooks/useAmount";
import { useCalculateExpense } from "../hooks/useCalculateExpenses";
import { formatCurrency } from "../utils/formatCurrency";
import { useUser } from "../hooks/useUser";


export default function InfoSummary() {
    const { totalGastado, totalDisponible } = useCalculateExpense();
    const { state } = useUser();


    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 md:p-10">

            <h1 className="text-white font-bold text-xl md:text-2xl px-2 py-5 md:py-10">
                Hola {state.user}, estos son tus números...
            </h1>

            <div className="grid grid-cols-2 gap-3 p-2">

                <div className="bg-green-400/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                    <p className="text-white/70 text-lg mb-2">Tu dinero</p>
                    <span className="text-green-400 font-bold text-xl md:text-3xl break-all leading-tight">
                        {formatCurrency(totalDisponible)}
                    </span>
                </div>

                <div className="bg-red-600/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                    <p className="text-white/70 text-lg mb-2">Gastaste</p>
                    <span className="text-red-500 font-bold text-xl md:text-3xl break-all leading-tight">
                        {formatCurrency(totalGastado)}
                    </span>
                </div>

            </div>

        </div>
    )
}