import { useContext } from "react"
import { Link } from "react-router-dom"
import { ArrowLeftCircle } from "lucide-react"
import CardExpenses from "../components/CardExpenses"
import { useExpense } from "../hooks/useExpense"

export default function MoreSummary() {
    const { state } = useExpense();

    return (
        <div className="w-full max-w-2xl mx-auto px-5 md:px-0">
            <div className=" md:flex justify-between items-baseline p-8 ">
                <div className="pb-4">
                    <h1 className="text-white text-4xl font-bold">
                        Resumen de gastos
                    </h1>
                    <p className="text-lg text-slate-300">
                        Estos son tus gastos completos
                    </p>
                </div>

                <Link to="/dashboard">
                    <span className="flex items-center gap-2 text-white hover:text-gray-400">
                        <ArrowLeftCircle />
                        Ir al dashboard
                    </span>
                </Link>
            </div>

            {state.expenses.map(expense => (
                <CardExpenses
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    )
}