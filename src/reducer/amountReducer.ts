
export type AmountState = {
    amount: number
}

//Creamos los acciones que tendra nuestro reducer de cantidad de nuestro dinero:
export const AMOUNT_TYPE = {
    ADD: 'add_amount',
    SET_AMOUNT: 'set_amount',
    RESTART: 'restart_amount'
} as const

//Definimos las acciones para cantidad de dinero
export type AmountActions =
    | { type: typeof AMOUNT_TYPE.ADD, payload: number }
    | { type: typeof AMOUNT_TYPE.SET_AMOUNT, payload: number }
    | { type: typeof AMOUNT_TYPE.RESTART }

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

        case (AMOUNT_TYPE.ADD):
            return {
                ...state,
                amount: state.amount + action.payload
            }

        case (AMOUNT_TYPE.SET_AMOUNT):
            return {
                ...state,
                amount: action.payload
            }

        case (AMOUNT_TYPE.RESTART):
            return {
                ...state,
                amount: 0
            }

        default:
            return state
    }
}