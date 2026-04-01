import { useContext, useMemo } from "react";
import { UserContext } from "../context/userContext";
import { useAmount } from "../hooks/useAmount";
import { useCalculateExpense } from "../hooks/useCalculateExpenses";
import { formatCurrency } from "../utils/formatCurrency";


export default function InfoSummary() {
    const { state } = useAmount();
    const { totalGastado, totalDisponible } = useCalculateExpense();
    const { userName } = useContext(UserContext);


    return (
        <>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-1 md:p-10 ">

                <h1 className='text-white font-bold text-2xl px-5 py-10'>Hola {userName}, estos son tus numeros...</h1>

                <div className="flex items-center gap-5 p-5">
                    <div className=" bg-green-400/30 backdrop-blur-xl border-white/10 rounded-2xl w-full max-w-2xs p-5">
                        <p className="text-white text-xl flex flex-col gap-4">
                            Tu dinero
                            <span className="text-green-400 text-3xl font-bold ">
                                {formatCurrency(totalDisponible)}
                            </span>
                        </p>
                    </div>

                    <div className="bg-red-600/30 backdrop-blur-xl border-white/10 rounded-2xl w-full max-w-2xs p-5">

                        <p className=" text-white text-xl flex flex-col gap-4">
                            Gastaste                            <span className="text-red-500 text-3xl font-bold">
                                {formatCurrency(totalGastado)}
                            </span>
                        </p>
                    </div>
                </div>




            </div>
        </>
    )
}