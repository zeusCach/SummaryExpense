import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link, NavLink } from "react-router-dom";

export default function Navigator() {

    return (
        <>
            <div className="bg-slate-950 backdrop-blur-md flex justify-between items-center p-4 ">
                <Link to={'/'}>
                    <h1 className="text-emerald-400 font-bold text-xl ml-2  cursor-pointer">
                        SummaryExpense
                    </h1>
                </Link>
                <div className="hidden md:flex items-center gap-5">
                    <NavLink className="text-slate-500 font-bold" to="/cuenta">
                        Cuenta
                    </NavLink>

                    <NavLink className="text-slate-500 font-bold" to="/tarjetas">
                        Tarjetas
                    </NavLink>

                    <NavLink className="text-slate-500 font-bold" to="/estadisticas">
                        Estadísticas
                    </NavLink>

                </div>
                {/* <div className="flex justify-end items-center gap-5">

                    <button className="border border-white/40 text-white bg-transparent hover:bg-white/10 px-2 py-2 rounded-lg">
                        Cerrar sesion
                    </button>
                </div> */}

            </div>
        </>
    )
}