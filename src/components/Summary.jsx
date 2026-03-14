import { useContext, useMemo, useState } from "react"
import { expensesDB } from "../data/data"
import { ReduceContext } from "../context/reduceContext"
import CardSummary from "./CardSummary";


export default function Summary() {

    //Traemos el state de reduce de nuestro context
    const state = useContext(ReduceContext)

    //console.log(state)

    //funcion que verifica si existen gastos
    const isEmpty = useMemo(() => state.length === 0, [state]);

    return (
        <>

            <div className="w-full max-w-2xl mx-auto">
                <div className="" >
                    <h1 className="text-white text-4xl font-bold pb-5">
                        Resumen de gastos
                    </h1>


                    {  //si esta vacio muestra mensaje, si no muestra info de gastos
                        isEmpty
                            ? <p className="text-lg text-white/80 font-bold py-18">Genial, no tienes gastos. Añade alguno y empieza ahorrar</p>
                            :
                            state.map(expense => (

                                <CardSummary
                                    key={expense.id}
                                    expense={expense}
                                />

                            ))

                    }
                </div>
            </div>
        </>
    )
}