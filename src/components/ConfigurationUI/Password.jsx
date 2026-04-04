import { Edit } from "lucide-react";

export default function Password() {
    return (
        <div className="pt-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

                <div className="mb-8">
                    <h2 className="text-white text-2xl font-semibold">Modifica tu contraseña</h2>
                    <p className="text-slate-400 text-sm mt-1">Mantén tu cuenta segura</p>
                </div>

                <div className="p-2 flex items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <label className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                            Contraseña
                        </label>
                        <p className="text-xl font-bold text-white tracking-widest">
                            ***********
                        </p>
                    </div>

                    <button className="text-slate-400 hover:text-white transition-colors">
                        <Edit className="cursor-pointer" size={20} />
                    </button>
                </div>

            </div>
        </div>
    )
}