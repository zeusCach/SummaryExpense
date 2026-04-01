import { useContext } from "react"
import { ExpensesContext } from "../context/ExpensesContext"



export const useExpense = () => {
    const context = useContext(ExpensesContext);
    if (!context) throw new Error('Error en el provider');

    return context;
}