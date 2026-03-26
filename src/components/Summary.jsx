import { useContext, useMemo, useState } from "react"
import { ReduceContext } from "../context/reduceContext"
import CardSummary from "./CardSummary";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";


export default function Summary() {

    //Traemos el state de reduce de nuestro context
    const state = useContext(ReduceContext)

    //console.log(state)

    //funcion que verifica si existen gastos
    const isEmpty = useMemo(() => state.length === 0, [state]);

    //retorna solo 2 gastos si hay mas en nuestro stock de gastos
    const itemExpense = state.length > 3 ? state.slice(0, 2) : state;

    return (
        <>

            <div className="w-full max-w-2xl mx-auto">
                <div className="" >
                    <h1 className="text-white text-4xl font-bold pb-5">
                        Tus gastos más recientes
                    </h1>


                    {  //si esta vacio muestra mensaje, si no muestra info de gastos
                        isEmpty
                            ? <p className="text-lg text-white/80 font-bold py-18">Genial, no tienes gastos. Añade alguno y empieza ahorrar</p>
                            :
                            itemExpense.map(expense => (

                                <CardSummary
                                    key={expense.id}
                                    expense={expense}
                                />

                            ))
                    }

                    {
                        state.length > 3 && (
                            <Link to='/expenses'>
                                <span className="
                                flex items-center gap-2 
                                text-white hover:text-gray-400
                                px-4 py-4
                                ">
                                    Ver todos los gastos <ArrowRightCircle />
                                </span>
                            </Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}