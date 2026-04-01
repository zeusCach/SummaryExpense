
import { useAmount } from "./useAmount"
import { useExpense } from "./useExpense";

export const useCalculateExpense = () => {
    const { state: stateExpenses } = useExpense();
    const { state: stateAmount } = useAmount();

    //operacion que hace el calculo de gasto total
    const totalGastado = stateExpenses.expenses.reduce((acc, expenses) => {
        return acc + expenses.amount
    }, 0)

    //calcula el total disponible de nuestro dinero
    const totalDisponible = stateAmount.amount - totalGastado;

    return {
        totalGastado,
        totalDisponible
    }
}