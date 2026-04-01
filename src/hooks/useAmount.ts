import { useContext } from "react"
import { amountContext } from "../context/amountContext"


export const useAmount = () => {

    const context = useContext(amountContext);
    if (!context) throw new Error("Ocurrio un error en el provider del context");

    return context;
}