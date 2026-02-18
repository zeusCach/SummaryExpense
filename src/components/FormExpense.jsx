

export default function FormExpense() {
    return (
        <>
            <div className="p-5">
                <h1 className="text-white text-4xl font-bold text-center p-5">
                    Añade tu compra
                </h1>

                <form className="space-y-5">
                    <div className="flex flex-col gap-3 p-3">
                        <label htmlFor="title"
                            className="text-2xl font-bold text-white ">
                            ¿Qué compramos?
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Ej. Netflix, Despensa, Cine"
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-white/10"
                        />
                    </div>

                    <div className="flex flex-col gap-3 p-3">
                        <label htmlFor="amount"
                            className="text-2xl font-bold text-white ">
                            Cantidad
                        </label>
                        <input
                            type="number"
                            name="amount"
                            required
                            placeholder="Ej. 250"
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-white/10"
                        />
                    </div>

                    <div className="flex flex-col gap-3 p-3">
                        <label htmlFor="category"
                            className="text-2xl font-bold text-white ">
                            Categoria
                        </label>
                        <input
                            type="text"
                            required
                            name="category"
                            placeholder="Ej. Entretenimiento, Comida, Salud"
                            className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-white/10"
                        />
                    </div>

                    <button className="w-full bg-emerald-400 text-white font-semibold px-6 py-3.5 rounded-xl cursor-pointer">
                        Agregar Gasto
                    </button>
                </form>

            </div>


        </>
    )
}