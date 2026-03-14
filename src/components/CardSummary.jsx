import { Edit, Edit2, Save, SaveIcon } from "lucide-react";
import { useContext, useState } from "react";
import { DispatchContext, ReduceContext } from "../context/reduceContext";
import { EXPESES_TYPE } from "../reducer/appReducer";

export default function CardSummary({ expense }) {
    //destructuramos las variables de nuestro state expense
    const { title, category, amount } = expense;

    //importamos el dispatch para manejar la accion de edit summary
    const dispatch = useContext(DispatchContext);

    //state que controla la accion de editar gasto
    const [edit, setEdit] = useState(false);

    //state para controlar los eventos de los inputs 
    const [inputValue, setInputValue] = useState({ title, category, amount })

    console.log(expense);

    function handleChange(e) {
        const { name, value } = e.target;

        setInputValue(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handleEdit() {

        const updateExpense = {
            ...expense,
            title: inputValue.title,
            category: inputValue.category,
            amount: inputValue.amount
        }

        dispatch({
            type: EXPESES_TYPE.UPDATE,
            payload: updateExpense
        })


        setEdit(false)

    }
    return (
        <>
            <section className=" 
            bg-gradient-to-r from-orange-400 to-orange-600 
            rounded-2xl p-5 shadow-md hover:shadow-lg 
            transition mb-4"
            >

                <div className="flex items-center justify-end gap-4">
                    {edit && (
                        <button
                            className='
                                    bg-green-600 px-1 py-1 text-slate-50
                                    rounded-lg cursor-pointer border-0
                                    '
                            onClick={handleEdit}
                        >
                            Guardar
                        </button>

                    )}

                    <Edit
                        className="cursor-pointer text-slate-50"
                        onClick={() => setEdit(true)}
                    />


                </div>
                <div className="flex justify-between items-center">

                    <div >
                        {
                            edit ?

                                <div className="flex flex-col gap-2">

                                    <input
                                        type="text"
                                        name="title"
                                        value={inputValue.title}
                                        onChange={handleChange}
                                        className=" 
                                         bg-transparent text-xl font-medium
                                       text-white outline-none w-fit"
                                    />
                                    <input
                                        type="text"
                                        name="category"
                                        value={inputValue.category}
                                        onChange={handleChange}
                                        className=" 
                                         bg-transparent text-xl font-medium
                                       text-gray-900  outline-none w-fit"
                                    />
                                </div>
                                :
                                <>
                                    <p className="text-xl font-medium text-white">
                                        {title}
                                    </p>

                                    <p className="text-lg text-gray-900  opacity-80">
                                        {category}
                                    </p>
                                </>

                        }

                    </div>

                    {
                        edit ?
                            <input
                                type="number"
                                name="amount"
                                value={inputValue.amount}
                                onChange={handleChange}
                                className="
                                bg-transparent text-3xl font-bold text-right 
                                text-white outline-none w-24 focus:bg-white/20 
                                focus:px-2 focus:rounded
                                "
                            />
                            :
                            <p className="text-3xl font-bold text-right text-white mt-1">
                                ${amount}
                            </p>
                    }


                </div>
            </section>
        </>
    )
}