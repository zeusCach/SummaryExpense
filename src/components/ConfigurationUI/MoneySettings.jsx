import { useState } from "react";
import { ArrowLeftCircle, Edit } from "lucide-react";
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
        <>
            <div className="space-y-4 pt-5">

                <div className=" bg-white/5 rounded-lg p-8">
                    <h2 className="text-white font-normal text-2xl ml-1">
                        Controla el total de tu dinero
                    </h2>
                    <div className="container grid grid-cols-1 md:grid-cols-2 py-8 gap-6">
                        <div className="flex items-center justify-between px-2 py-2">
                            <div className="flex flex-col">
                                <label className="text-white font-medium text-lg ">
                                    Dinero actual
                                </label>
                                {


                                    editAmount ? (
                                        <>
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <input
                                                    type="text"
                                                    name="amount"
                                                    value={amountState.amount}
                                                    onChange={handleChange}
                                                    className="px-2 py-2 rounded-lg text-white border-2 border-green-400"
                                                />

                                                <EditButton
                                                    onSave={handleEdit}
                                                    onCancel={() => setEditAmount(false)}
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <p className="text-lg font-semibold text-slate-300">
                                            {formatCurrency(state.amount)}
                                        </p>
                                    )


                                }

                            </div>

                            {
                                !editAmount && (
                                    <Edit
                                        onClick={isEdit}
                                        className="text-white cursor-pointer"
                                    />)

                            }

                        </div>



                    </div>

                    <p className="text-slate-400 text-sm font-medium italic">
                        Recuerda que es tu dinero, no puedes modificar y engañarte.
                        ¡Modifica cuando tu dinero crezca!
                    </p>
                </div>
            </div>
        </>
    )
}