import { useMemo } from "react"
import CardSummary from "./CardExpenses";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useExpense } from "../hooks/useExpense";
import EmptyExpenses from "../utils/EmptyExpenses";


export default function Summary() {

    //Traemos el state de reduce de nuestro context
    const { state } = useExpense()

    //console.log(state)

    //funcion que verifica si existen gastos
    const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);

    //retorna solo 2 gastos si hay mas en nuestro stock de gastos
    const itemExpense = state.expenses.length > 2 ? state.expenses.slice(0, 2) : state.expenses;

    return (
        <>

            <div className="w-full max-w-2xl mx-auto">
                <div className="" >
                    {
                        !isEmpty && (
                            <h1 className="text-white text-4xl font-bold pb-5">
                                Tus gastos más recientes
                            </h1>
                        )
                    }


                    {  //si esta vacio muestra mensaje, si no muestra info de gastos
                        isEmpty
                            ? <EmptyExpenses />
                            :
                            itemExpense.map(expense => (

                                <CardSummary
                                    key={expense.id}
                                    expense={expense}
                                />

                            ))
                    }

                    {
                        state.expenses.length > 2 && (
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