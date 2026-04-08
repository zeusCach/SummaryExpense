import { Link, NavLink } from "react-router-dom";

export default function Navigator() {
    return (
        <div className="fixed top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-b border-white/10 p-4 z-50">
            <div className="flex justify-between items-center">
                <Link to={'/'}>
                    <h1 className="text-emerald-400 font-bold text-xl ml-2 cursor-pointer">
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
            </div>
        </div>
    )
}