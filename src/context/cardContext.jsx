import { createContext, useReducer } from "react";
import { CardReducer, inicialStateCard } from "../reducer/cardReducer";

export const CardContext = createContext();

export default function CardContextProvider({ children }) {
    const [state, dispatch] = useReducer(CardReducer, inicialStateCard);
    const { card } = state
    return (
        <CardContext.Provider value={{ card, dispatch }}>
            {children}
        </CardContext.Provider>
    )
}