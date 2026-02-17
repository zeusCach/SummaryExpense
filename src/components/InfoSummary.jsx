

export default function InfoSummary() {
    return (
        <>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 ">

                <h1 className="text-white text-4xl font-bold text-center pb-5">
                    Resumen de gastos
                </h1>

                <div className="flex items-center gap-5 p-5">
                    <div className=" bg-green-400/30 backdrop-blur-xl border-white/10 rounded-2xl w-full max-w-2xs p-5">
                        <p className="text-white text-xl flex flex-col gap-4">
                            Tu dinero
                            <span className="text-green-400 text-3xl font-bold ">
                                $5660
                            </span>
                        </p>
                    </div>

                    <div className="bg-red-600/30 backdrop-blur-xl border-white/10 rounded-2xl w-full max-w-2xs p-5">

                        <p className=" text-white text-xl flex flex-col gap-4">
                            Gastaste                            <span className="text-red-500 text-3xl font-bold">
                                $238
                            </span>
                        </p>
                    </div>
                </div>




            </div>
        </>
    )
}