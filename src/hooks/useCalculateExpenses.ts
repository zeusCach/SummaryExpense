
import { useAmount } from "./useAmount"
import { useExpense } from "./useExpense";

export const useCalculateExpense = () => {
    const { state } = useExpense();
    const { } = useAmount();
    console.log(state)

    //operacion que hace el calculo de gasto


}