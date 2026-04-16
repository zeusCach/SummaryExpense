import { useState, ChangeEvent } from "react";
import { useAmount } from "../../hooks/useAmount";
import { AMOUNT_TYPE } from "../../reducer/amountReducer";
import MoneyCard from "./MoneyCard";
import RestartMoneyModal from "./RestartMoneyModal";

//tipado de amount para state amountState
type AmountState = {
    amount: string;
}

export default function MoneySettings() {

    //State que controla el negocio del reducer de amount
    const { state, dispatch } = useAmount();

    //state que controla el estado del modal
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //state que maneja el negocio para editar cantidad de dinero
    const [editAmount, setEditAmount] = useState<boolean>(false);

    //State principal que maneja la cantidad real que almacena el usuario
    const [amountState, setAmountState] = useState<AmountState>({ amount: '' });

    //funcion handle encargada de la accion de editar cantidad, llamando al set_amount desde su reducer
    function handleEdit() {
        dispatch({
            type: AMOUNT_TYPE.SET_AMOUNT,
            payload: Number(amountState.amount)
        });

        //Seteamos para que los botones de edit dejen de verse al editar
        setEditAmount(false);
    }

    //funcion que controla el cambio desde el input, almace en el state el valor que el usuario escribe
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        //parseamos los datos de entrada a traves de amount desde el input(solo permite numeros)
        const parsed = name === 'amount'
            ? value.replace(/\D/g, '')
            : value;

        //almacenamos el valor de entrada desde el input hasta el state
        setAmountState(prev => ({
            ...prev, [name]: parsed
        }));
    }

    return (
        <div className="pt-5">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="mb-8">
                    <h2 className="text-white text-2xl font-semibold">Controla tu dinero</h2>
                    <p className="text-slate-400 text-sm mt-1">Administra el total de tu presupuesto</p>
                </div>

                <MoneyCard
                    amount={state.amount}
                    onRestart={() => setIsOpen(true)}
                    editAmount={editAmount}
                    onEdit={() => setEditAmount(true)}
                    onSave={handleEdit}
                    onCancel={() => setEditAmount(false)}
                    amountState={amountState}
                    onChange={handleChange}
                />

                <p className="text-slate-500 text-sm mt-5">
                    Recuerda que es tu dinero, no puedes modificar y engañarte.
                    ¡Modifica solo cuando tu dinero crezca!
                </p>
            </div>

            <RestartMoneyModal
                isOpenModal={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}


