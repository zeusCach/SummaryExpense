import { createContext, useEffect, useReducer } from "react"
import { ExpenseReducer, inicialState } from "../reducer/appReducer";

//Creamos el context para el state y el dispatch
export const ReduceContext = createContext(null)
export const DispatchContext = createContext(null)

export default function ReduceContextProvider({ children }) {
    //Reducer que contiene nuestros accion y state
    const [state, dispatch] = useReducer(ExpenseReducer, inicialState);

    //Effect que se lanza cada que el state cambia para guardar el gasto añadido a nuestro storage
    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state.expenses))
    }, [state]);

    return (
        <ReduceContext.Provider value={state}> {/* Provider del context para state */}
            <DispatchContext.Provider value={dispatch}> {/* Provider del context para el dispatch */}
                {children}
            </DispatchContext.Provider>
        </ReduceContext.Provider>
    )
}
