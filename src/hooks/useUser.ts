import { useContext } from "react"
import { UserContext } from "../context/userContext"


export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) throw new Error("Error en el context");

    return context;
}