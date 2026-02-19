
export default function Danger() {
    return (
        <>

            <div className="space-y-4 pt-5">
                <div className=" bg-white/5 rounded-lg p-8">
                    <h2 className="text-white font-normal text-2xl ml-1">
                        Zona de riesgo
                    </h2>
                    <div className="container grid grid-cols-1 md:grid-cols-2 py-8 gap-6">

                        <div className="flex flex-col">
                            <div className="flex-1 flex gap-4 pb-2">
                                <button
                                    className="px-2 py-2 bg-red-400 hover:bg-red-500 text-white font-medium rounded-xl cursor-pointer"
                                >
                                    Eliminar cuenta
                                </button>
                            </div>
                            <p className="text-xs text-slate-300">Al eliminar tu cuenta perderás toda tu información.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}