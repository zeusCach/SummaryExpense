import { Link } from "react-router-dom";
import InfoSummary from "./InfoSummary";
import Summary from "./Summary";
import { UserContext } from "../context/userContext";
import { useContext } from "react";


export default function Dashboard() {
    const { userName } = useContext(UserContext)

    return (
        <>
            <div className="flex items-center justify-between m-10">
                <p className="text-slate-500 font-bold">
                    @{userName}
                </p>

                <Link to='/registrar' className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-lg">
                    Añadir gasto
                </Link>
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