
import Account from "../components/ConfigurationUI/Account";
import Password from "../components/ConfigurationUI/Password";
import Danger from "../components/ConfigurationUI/Danger";
import MoneySettings from "../components/ConfigurationUI/MoneySettings";
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";


export default function Configuration() {


    return (
        <>
            <div className="container mx-auto max-w-4xl px-5 py-10">


                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h1 className="text-2xl text-white font-semibold">Configuración</h1>
                        <p className="text-slate-400 text-lg mt-1">Administra tu cuenta</p>
                    </div>
                    <Link to="/dashboard">
                        <span className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                            <ArrowLeftCircle size={25} />
                            Ir al dashboard
                        </span>
                    </Link>
                </div>

                <Account />
                <Password />
                <MoneySettings />
                <Danger />
            </div>

        </>
    )
}