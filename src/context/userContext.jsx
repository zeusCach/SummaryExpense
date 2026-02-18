import { createContext, useState } from "react"

export const UserContext = createContext();

export function UserContextProvider(props) {

    const [userName, setUserName] = useState("Zeus Cach");
    const value = { userName, setUserName };

    return (
        <>
            <UserContext.Provider value={value}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}