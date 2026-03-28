import { ArrowLeftCircle } from "lucide-react";
import { useContext, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { DispatchContext, ReduceContext } from "../context/reduceContext";
import { EXPESES_TYPE } from "../reducer/expensesReducer";

const inicialStateForm = {
    title: '',
    amount: '',
    category: ''
}

export default function FormExpense() {

    //Traemos el state de reduce de nuestro context
    const state = useContext(ReduceContext)

    //Traemos el dispatch del reduce context para acciones
    const dispatch = useContext(DispatchContext);

    //importamos useParam para manejo de id de la url
    const { id } = useParams();

    // si hay id en la url, buscamos el id con sus propiedades
    const expenseEdit = id ? state.find(e => e.id === id) : null

    //State principal modificable - si existe un id para edicar gasto, toma el state los valores
    //a modificar, si no existe, toma el inicialSate
    const [expense, setExpense] = useState(expenseEdit ?? inicialStateForm);

    //funcion que captura el evento que dispara nuestro input
    function handleChange(e) {
        const { name, value } = e.target; //destructuracion de name y value de nuestro target del input

        //Escribimos sobre el state para agregar una tarea, sin quitar el anterior
        setExpense(prev => ({
            ...prev, //copia del anterior valor
            [name]: value //nueva info
        }));

    }

    //funcion principal que captura el evento que dispara el boton submit
    function handleSumit(e) {
        e.preventDefault();

        //dispatch que obtiene la accion de añadir
        dispatch({
            type: EXPESES_TYPE.ADD,
            payload: expense //añadimos la informacion al payload
        });

        //seteamos el state
        setExpense(inicialStateForm);
    }

    function handleEdit(e) {
        e.preventDefault(); //evitamos la carga de renderizado cada que se haga submit

        //Dispatch que nos permite actualizar una tarea
        dispatch({
            type: EXPESES_TYPE.UPDATE,
            payload: expense
        });

        //seteamos el state
        setExpense(inicialStateForm);
    }

    return (
        <>
            <div className="container mx-auto max-w-4xl md:max-w-xl px-5 py-10">

                <div className="flex justify-between items-ba p-8 ">
                    <div className="">
                        {
                            expenseEdit ?
                                <h1 className="text-2xl text-white font-semibold ">
                                    Actualiza tu compra
                                </h1>
                                :
                                <h1 className="text-2xl text-white font-semibold ">
                                    Añade tu compra
                                </h1>
                        }

                        {
                            expenseEdit ?

                                <p className="text-lg text-slate-300 pb-10">
                                    Puedes actualizar lo que quieras
                                </p>

                                :
                                <p className="text-lg text-slate-300 pb-10">
                                    Puedes agregar cualquier gasto
                                </p>
                        }
                    </div>

                    <Link to="/dashboard" className="hidden md:block">
                        <span className="flex items-center gap-2 text-white hover:text-gray-400">
                            <ArrowLeftCircle />
                            Ir al dashboard
                        </span>
                    </Link>


                </div>

                <div className="bg-white/5 rounded-lg p-8 ">

                    {/* 
                    onSubmit del form modificable, si la accion es editar
                    es configurado para editar, si no la accion es para añadir un nuevo gasto 
                    */}
                    <form className="space-y-5" onSubmit={expenseEdit ? handleEdit : handleSumit}>
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
                            {expenseEdit
                                ?
                                'Actualizar gasto'
                                :
                                'Agregar Gasto'
                            }
                        </button>

                    </form>


                </div>
                <Link to="/dashboard" className="block md:hidden">
                    <span className="flex justify-end items-center gap-2 px-4 py-4 text-white hover:text-green-400  ">
                        <ArrowLeftCircle />
                        Ir al dashboard
                    </span>
                </Link>
            </div>

        </>
    )
}