import { CircleAlertIcon, Edit, Edit2, Save, SaveIcon, XCircle } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { EXPESES_TYPE } from "../reducer/expensesReducer";
import { useExpense } from "../hooks/useExpense";
import { formatCurrency } from "../utils/formatCurrency";
import { useState } from "react";
import Modal from "./ui/Modal";

export default function CardExpenses({ expense }) {

    //hook que controla la accion del modal
    const [isOpen, setIsOpen] = useState(false);

    //usamos el hook de gasto, especificamente el dispatch
    const { dispatch } = useExpense()

    //destructuramos las variables de nuestro state expense
    const { id, title, category, amount, date } = expense;


    //importamos useNavigate para el manejo de ruta por url
    const navigate = useNavigate();

    function handleEdit() {
        //usamos la funcion navigate para ir a la ruta del form, 
        //usando el id, del componente que se hizo clic para editar
        navigate(`/edit/${id}`);
    }

    function handleDelete(id) {
        dispatch({
            type: EXPESES_TYPE.DELETE,
            payload: { id: id }
        })
    }

    return (
        <>
            <section className=" bg-gradient-to-r from-orange-400 to-orange-600 
            rounded-2xl p-5 shadow-md hover:shadow-lg transition mb-4">

                <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-xl font-semibold text-white leading-tight">
                            {title}
                        </p>
                        <span className="text-xl text-white/70">
                            {category}
                        </span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <button onClick={handleEdit} className="text-white/70 hover:text-white transition-colors">
                            <Edit className="cursor-pointer" size={20} />
                        </button>
                        <button onClick={() => setIsOpen(true)} className="text-white/70 hover:text-white transition-colors">
                            <XCircle className="cursor-pointer" size={20} />
                        </button>
                    </div>
                </div>


                <div className="flex items-end justify-between mt-4">
                    <p className="text-xs text-white/50">{date}</p>
                    <p className="text-3xl font-bold text-white">
                        {formatCurrency(amount)}
                    </p>
                </div>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                >

                    <div className="flex flex-col gap-4">

                        <div className="flex justify-center ">
                            <CircleAlertIcon size={50} className="text-red-400" />
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-white text-xl font-semibold">
                                Estas apunto de eliminar tu gasto
                            </p>
                            <p className="text-white/50 text-sm">
                                ¿Estas seguro? Esta acción es irreversible
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl border border-white/10 text-white/70 hover:bg-white/5 transition cursor-pointer"
                            >
                                Cancelar
                            </button>
                            <button onClick={() => handleDelete(id)} className="flex-1 px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition
                                cursor-pointer
                                "
                            >
                                Eliminar
                            </button>
                        </div>

                    </div>

                </Modal>
            </section>
        </>
    )
}