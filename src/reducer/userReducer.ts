
//Definimos el tipado del state
export type UserState = {
    user: string
}

//Constante de tipos de acciones
export const USER_TYPE = {
    ADD: 'add_user',
    UPDATE: 'update_user'
} as const

// Unión de acciones tipadas para el reducer de usuario
export type UserActions =
    | { type: typeof USER_TYPE.ADD, payload: UserState }
    | { type: typeof USER_TYPE.UPDATE, payload: UserState }



//localStorage para guardar storage de nuestro usuario
const localStorageUser = () => {
    const user = localStorage.getItem('user');
    if (!user || user === "undefined") return ''

    return JSON.parse(user)
}

//State inicial para nuestro reducer
export const inicialStateUser: UserState = {
    user: localStorageUser()
}

//Fuente de verdad -  Reducer que controla las acciones segun ocurran en el cliente
export const UserReducer = (
    state: UserState = inicialStateUser,
    action: UserActions
): UserState => {

    switch (action.type) {
        case (USER_TYPE.ADD):
            return {
                ...state,
                user: action.payload.user
            }
        case (USER_TYPE.UPDATE):
            return {
                ...state,
                user: action.payload.user
            }

        default:
            return state
    }
}