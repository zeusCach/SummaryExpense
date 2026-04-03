import { createContext, useEffect, useReducer } from "react";
import { inicialStateUser, UserActions, UserReducer, UserState } from "../reducer/userReducer";

//Tipamos el valor para el context
type UserContextType = {
    state: UserState,
    dispatch: React.Dispatch<UserActions>
}

//tipado de props para el children de nuestro provider
type props = {
    children: React.ReactNode
}

//Definimos el context para nuestro user, tipado: puede contener datos, o puede ser nulo, sin iniciar
export const UserContext = createContext<UserContextType | null>(null);

export default function UserContextProvider({ children }: props) {

    const [state, dispatch] = useReducer(UserReducer, inicialStateUser);

    useEffect(() => {
        if (state.user) { localStorage.setItem('user', JSON.stringify(state.user)); }
    }, [state.user]);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
