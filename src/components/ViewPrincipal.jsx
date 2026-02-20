import { Link } from "react-router-dom";
import InfoSummary from "./InfoSummary";
import Summary from "./Summary";
import { UserContext } from "../context/userContext";
import { useContext } from "react";


export default function ViewPrincipal() {
    const { userName } = useContext(UserContext)

    return (
        <>
            <div className="flex items-center justify-between m-10">
                <p className="text-slate-500 font-bold">
                    @{userName}
                </p>

                <Link to='/registrar' className="bg-green-600 text-slate-50 rounded-lg px-2 py-2 cursor-pointer">
                    Añadir gasto
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
                <Summary />
                <InfoSummary />
            </div>
        </>
    )
}