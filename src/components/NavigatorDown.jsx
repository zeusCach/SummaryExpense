import { ChartLine, CirclePlus, HomeIcon, LogOutIcon, UserCog2Icon, Wallet, WalletCardsIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function NavigatorDown() {
    const { pathname } = useLocation();

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-t border-white/10 p-4 md:hidden z-50">
            <div className="flex justify-around items-center">

                <Link to="/cuenta" className="flex flex-col items-center gap-1 group">
                    <UserCog2Icon
                        size={24}
                        className={`transition-colors ${pathname === '/cuenta' ? 'text-emerald-400' : 'text-slate-400 group-active:text-emerald-400'}`}
                    />
                    <p className={`text-xs transition-colors ${pathname === '/cuenta' ? 'text-emerald-400' : 'text-slate-500'}`}>
                        Configuración
                    </p>
                </Link>

                <Link to="/dashboard" className="flex flex-col items-center gap-1 group">
                    <HomeIcon
                        size={24}
                        className={`transition-colors ${pathname === '/dashboard' ? 'text-emerald-400' : 'text-slate-400 group-active:text-emerald-400'}`}
                    />
                    <p className={`text-xs transition-colors ${pathname === '/dashboard' ? 'text-emerald-400' : 'text-slate-500'}`}>
                        Home
                    </p>
                </Link>

                <Link to="/registrar" className="flex flex-col items-center gap-1 group">
                    <CirclePlus
                        size={24}
                        className={`transition-colors ${pathname === '/registrar' ? 'text-emerald-400' : 'text-slate-400 group-active:text-emerald-400'}`}
                    />
                    <p className={`text-xs transition-colors ${pathname === '/registrar' ? 'text-emerald-400' : 'text-slate-500'}`}>
                        Añade gasto
                    </p>
                </Link>


                <Link to={"/estadisticas"} className="flex flex-col items-center gap-1 group">
                    <ChartLine
                        size={24}
                        className="text-slate-400 group-active:text-emerald-400 transition-colors"
                    />
                    <p className="text-xs text-slate-500">
                        Estadísticas
                    </p>
                </Link>
            </div>
        </div>
    )
}