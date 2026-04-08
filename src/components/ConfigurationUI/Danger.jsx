
export default function Danger() {

    const deleteAcount = () => {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        <div className="pt-5">
            <div className="bg-white/5 border border-red-500/20 rounded-2xl p-8">

                <div className="mb-8">
                    <h2 className="text-red-400 text-2xl font-semibold">Zona de riesgo</h2>
                    <p className="text-slate-400 text-sm mt-1">Acciones irreversibles sobre tu cuenta</p>
                </div>

                <div className="p-2 flex flex-col gap-3">
                    <button
                        onClick={deleteAcount}
                        className="self-start px-4 py-2 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 hover:border-red-500 text-red-400 font-medium rounded-lg transition-all cursor-pointer">
                        Eliminar cuenta
                    </button>
                    <p className="text-sm text-slate-500">
                        Al eliminar tu cuenta perderás toda tu información de forma permanente. <span className="font-bold">La página se actualizará automáticamente.</span>
                    </p>
                </div>

            </div>
        </div>
    )
}