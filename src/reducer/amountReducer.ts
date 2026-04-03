
export type AmountState = {
    amount: number
}

//Creamos los acciones que tendra nuestro reducer de cantidad de nuestro dinero:
export const AMOUNT_TYPE = {
    ADD: 'add_amount',
} as const

//Definimos las acciones para cantidad de dinero
export type AmountActions =
    | { type: typeof AMOUNT_TYPE.ADD, payload: number }

//localstorage para amount

const localstorageAmount = () => {
    const amount = localStorage.getItem('amount')
    return amount ? JSON.parse(amount) : 0
}

//Creamos el valor iniciar de nuestro state de cantidad
export const inicialStateAmount: AmountState = {
    amount: localstorageAmount()
}

//Fuente de verdad -  Reducer que controla las acciones segun ocurran en el cliente
export const AmountReducer = (
    state: AmountState = inicialStateAmount,
    action: AmountActions
) => {
    switch (action.type) {
        //Accion que se usa para actualizar y añadir cantidad
        case (AMOUNT_TYPE.ADD):
            return {
                ...state,
                amount: state.amount + action.payload
            }
        default:
            return state
    }
}