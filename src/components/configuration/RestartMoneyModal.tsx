import { CircleAlertIcon } from "lucide-react";

import { useState } from "react";
import { useAmount } from "../../hooks/useAmount";
import { AMOUNT_TYPE } from "../../reducer/amountReducer";
import Modal from "../ui/Modal"

//tipado de props que recibe el componente del modal para restablecer dinero
type PropsRestartMoneyModal = {
    isOpenModal: boolean,
    onClose: () => void
}

export default function RestartMoneyModal({ isOpenModal, onClose }: PropsRestartMoneyModal) {


    //hook que permite consumir el context de nuestro reducer de amount
    const { dispatch } = useAmount()

    //handle que se encarga de restableces la cantidad de numero
    function handleRestart() {
        dispatch({ type: AMOUNT_TYPE.RESTART });
        onClose();
    }

    return (

        <Modal
            isOpen={isOpenModal}
            onClose={onClose}
        >

            <div className="flex flex-col gap-4">

                <div className="flex justify-center ">
                    <CircleAlertIcon size={50} className="text-red-400" />
                </div>
                <div className="text-center space-y-2">
                    <p className="text-white text-xl font-semibold">
                        Tu dinero regresara a cero, ¿Estas seguro?
                    </p>
                    <p className="text-white/50 text-sm">
                        Esta acción es irreversible
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={onClose} className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 hover:bg-white/5 transition cursor-pointer"
                    >
                        Cancelar
                    </button>
                    <button onClick={handleRestart} className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition
                    cursor-pointer
                    "
                    >
                        Reiniciar
                    </button>
                </div>

            </div>

        </Modal >
    )
}