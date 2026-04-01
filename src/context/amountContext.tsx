import { createContext, useEffect, useReducer } from "react";
import { AmountReducer, inicialStateAmount } from "../reducer/amountReducer";
import { AmountState, AmountActions } from "../reducer/amountReducer";

type AmountContextType = {
    state: AmountState;
    dispatch: React.Dispatch<AmountActions>;
}

type props = {
    children: React.ReactNode
}
export const amountContext = createContext<AmountContextType | undefined>(undefined);

export default function amountContextProvider({ children }: props) {
    const [state, dispatch] = useReducer(AmountReducer, inicialStateAmount);

    useEffect(() => {
        localStorage.setItem('amount', JSON.stringify(state.amount))
    }, [state.amount])
    return (
        <amountContext.Provider value={{ state, dispatch }}>
            {children}
        </amountContext.Provider>

    )
}