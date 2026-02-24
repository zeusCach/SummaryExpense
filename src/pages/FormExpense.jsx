import { ArrowLeftCircle } from "lucide-react";
import { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"
import { DispatchContext, ReduceContext } from "../context/reduceContext";
import { EXPESES_TYPE } from "../reducer/appReducer";

const inicialStateForm = {
    id: uuidv4(),
    title: '',
    amount: 0,
    category: ''
}

export default function FormExpense() {

    const dispatch = useContext(DispatchContext);
    const [expense, setExpense] = useState(inicialStateForm);

    function handleChange(e) {
        const { name, value } = e.target;

        setExpense(prev => ({
            ...prev,
            [name]: value
        }));

    }

    function handleSumit(e) {
        e.preventDefault();

        dispatch({
            type: EXPESES_TYPE.ADD,
            payload: expense
        })

        setExpense({
            ...inicialStateForm,
            id: uuidv4()
        })
    }

    return (
        <>
            <div className="container mx-auto max-w-4xl md:max-w-xl px-5 py-10">

                <div className="flex justify-between items-ba p-8 ">
                    <div className="">
                        <h1 className="text-2xl text-white font-semibold ">
                            Añade tu compra
                        </h1>
                        <p className="text-lg text-slate-300 pb-10">
                            Puedes agregar cualquier gasto
                        </p>
                    </div>

                    <Link to="/" className="hidden md:block">
                        <span className="flex items-center gap-2 text-white hover:text-green-400">
                            <ArrowLeftCircle />
                            Ir al dashboard
                        </span>
                    </Link>


                </div>

                <div className="bg-white/5 rounded-lg p-8 ">

                    <form className="space-y-5" onSubmit={handleSumit}>
                        <div className="flex flex-col gap-3 p-3">
                            <label htmlFor="title"
                                className="text-2xl font-bold text-white ">
                                ¿Qué compramos?
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={expense.title}
                                onChange={handleChange}
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
                                value={expense.amount}
                                onChange={handleChange}
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
                                name="category"
                                value={expense.category}
                                onChange={handleChange}
                                required
                                placeholder="Ej. Entretenimiento, Comida, Salud"
                                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 text-white placeholder:text-white/40 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50 transition-all duration-200 hover:bg-white/10"
                            />
                        </div>

                        <button className="w-full bg-emerald-400 text-white font-semibold px-6 py-3.5 rounded-xl cursor-pointer">
                            Agregar Gasto
                        </button>
                    </form>


                </div>
                <Link to="/" className="block md:hidden">
                    <span className="flex justify-end items-center gap-2 px-4 py-4 text-white hover:text-green-400  ">
                        <ArrowLeftCircle />
                        Ir al dashboard
                    </span>
                </Link>
            </div>

        </>
    )
}