import { useState } from "react";
import { ArrowLeftCircle, Edit, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import EditButton from "../EditButton";
import { AMOUNT_TYPE } from "../../reducer/amountReducer";
import { useAmount } from "../../hooks/useAmount";
import { formatCurrency } from "../../utils/formatCurrency";

export default function MoneySettings() {

    //hook que permite consumir el context de nuestro reducer de amount
    const { state, dispatch } = useAmount()

    //state engargado de activar los botones de editar de nuestro componente
    const [editAmount, setEditAmount] = useState(false);

    //state principal del amount
    const [amountState, setAmountState] = useState({ amount: '' });

    //funcion handle para actualizar nuestro total(solamente permite para cuando tu dinero crece)
    function handleEdit() {
        dispatch({
            type: AMOUNT_TYPE.ADD,
            payload: Number(amountState.amount)
        })

        setEditAmount(false)
    }

    //Funcion handle que se encarga de escuchar el evento change cuando escribimos sobre el input
    function handleChange(e) {
        const { name, value } = e.target

        //modifica el state principal e introduce los datos escritos por el usuarioo
        setAmountState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    //Funcion flecha que permite controlar las acciones de editar o cancelar edicion
    const isEdit = () => {
        setEditAmount(true)
    }

    return (
        <div className="pt-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

                {/* Header */}
                <div className="mb-8">
                    <h2 className="text-white text-2xl font-semibold">
                        Controla tu dinero
                    </h2>
                    <p className="text-slate-400 text-sm mt-1">
                        Administra el total de tu presupuesto
                    </p>
                </div>

                {/* Card de dinero */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">

                    {/* Info + edición */}
                    <div className="flex flex-col gap-3 flex-1">
                        <label className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                            Dinero actual
                        </label>

                        {editAmount ? (
                            <div className="flex flex-col md:flex-row gap-3">
                                <input
                                    type="text"
                                    name="amount"
                                    value={amountState.amount}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                    className="bg-white/5 border border-green-400/50 focus:border-green-400 outline-none text-white px-4 py-2 rounded-lg transition-colors w-full md:w-48"
                                />
                                <EditButton
                                    onSave={handleEdit}
                                    onCancel={() => setEditAmount(false)}
                                />
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <p className="text-3xl font-bold text-white">
                                    {formatCurrency(state.amount)}
                                </p>
                                <button
                                    onClick={isEdit}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <Edit className="cursor-pointer" size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Botón reiniciar */}
                    <button
                        onClick={() => dispatch({ type: AMOUNT_TYPE.RESTART })}
                        className="flex items-center gap-2 px-4 py-2 border border-red-400/50 text-red-400 rounded-lg hover:bg-red-400/10 hover:border-red-400 transition-all group self-start md:self-center"
                    >
                        <RotateCcw size={15} className="group-hover:-rotate-180 transition-transform duration-500" />
                        Reiniciar
                    </button>
                </div>

                {/* Nota */}
                <p className="text-slate-500 text-sm mt-5">
                    Recuerda que es tu dinero, no puedes modificar y engañarte.
                    ¡Modifica solo cuando tu dinero crezca!
                </p>

            </div>
        </div>
    )
}