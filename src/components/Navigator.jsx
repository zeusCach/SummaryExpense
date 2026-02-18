import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { NavLink } from "react-router-dom";

export default function Navigator() {
    const { userName } = useContext(UserContext)
    return (
        <>
            <div className="bg-neutral-900 flex justify-between items-center p-4">
                <div className="flex items-center gap-10 ">
                    <h1 className="text-emerald-400 font-bold text-xl ml-2">SummaryExpense</h1>
                    <NavLink className="text-slate-500 font-bold" to="/cuenta">Cuenta</NavLink>
                    <a href="" className="text-slate-500 font-bold">Estadisticas</a>
                </div>
                <div className="flex justify-end items-center gap-5">
                    <p className="text-slate-500 font-bold">{userName}</p>
                    <button className=" bg-red-400 hover:bg-red-500 
                    px-2 py-2 text-white font-semibold rounded-lg cursor-pointer ">
                        Cerrar sesion
                    </button>
                </div>

            </div>
        </>
    )
}