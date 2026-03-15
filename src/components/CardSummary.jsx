import { Edit, Edit2, Save, SaveIcon } from "lucide-react";
import { useContext, useState } from "react";
import { DispatchContext, ReduceContext } from "../context/reduceContext";

import { useNavigate } from "react-router-dom";

export default function CardSummary({ expense }) {
    //destructuramos las variables de nuestro state expense
    const { id, title, category, amount } = expense;

    //importamos useNavigate para el manejo de ruta por url
    const navigate = useNavigate();

    function handleEdit() {
        //usamos la funcion navigate para ir a la ruta del form, 
        //usando el id, del componente que se hizo clic para editar
        navigate(`/edit/${id}`);

        //Esta funcion para añadir desde el componente queda deprecada...
        // const updateExpense = {
        //     ...expense,
        //     title: inputValue.title,
        //     category: inputValue.category,
        //     amount: inputValue.amount
        // }

        // dispatch({
        //     type: EXPESES_TYPE.UPDATE,
        //     payload: updateExpense
        // })


        // setEdit(false)
    }


    return (
        <>
            <section className=" 
            bg-gradient-to-r from-orange-400 to-orange-600 
            rounded-2xl p-5 shadow-md hover:shadow-lg 
            transition mb-4"
            >

                <div className="flex items-center justify-end gap-4">
                    <Edit
                        className="cursor-pointer text-slate-50"
                        onClick={handleEdit}
                    />
                </div>
                <div className="flex justify-between items-center">

                    <div >
                        <p className="text-xl font-medium text-white">
                            {title}
                        </p>

                        <p className="text-lg text-gray-900  opacity-80">
                            {category}
                        </p>
                    </div>
                    <p className="text-3xl font-bold text-right text-white mt-1">
                        ${amount}
                    </p>
                </div>
            </section>
        </>
    )
}