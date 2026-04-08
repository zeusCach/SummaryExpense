import { useContext } from "react"
import { CardContext } from "../context/cardContext";


export const useCard = () => {
    const context = useContext(CardContext);
    if (!context) throw new Error("Error al cargar contexto");

    return context;
}