import { createContext, useEffect, useReducer } from "react"
import { ExpenseActions, ExpenseReducer, ExpenseState, inicialState } from "../reducer/expensesReducer";

type props = {
    children: React.ReactNode
}

type ExpensesContextType = {
    state: ExpenseState,
    dispatch: React.Dispatch<ExpenseActions>
}

//Creamos el context para el state y el dispatch
export const ExpensesContext = createContext<ExpensesContextType | null>(null)


export default function ExpensesContextProvider({ children }: props) {
    //Reducer que contiene nuestros accion y state
    const [state, dispatch] = useReducer(ExpenseReducer, inicialState);

    //Effect que se lanza cada que el state cambia para guardar el gasto añadido a nuestro storage
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
    }, [state]);


    return (
        <ExpensesContext.Provider value={{ state, dispatch }}> {/* Provider del context para state */}
            {children}
        </ExpensesContext.Provider>
    )
}
