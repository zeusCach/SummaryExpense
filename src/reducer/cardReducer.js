import { v4 as uuidv4 } from "uuid"

//Creacion de las acciones de nuestras tarjetas
export const CARD_TYPE = {
    ADD: 'add-card',
    DELETE: 'delete-card',
    UPDATE: 'update-card'
}

//CardAction, controlador de las acciones que ejecutara nuestro reducee
export const CardAction = {
    addCard: (card) => ({
        type: CARD_TYPE.ADD,
        payload: card
    }),
    updateCard: () => ({
        //Pendienteeeee
    }),
    deleteCard: () => ({
        //Pendienteeeee
    })
}

//localstorage
const localStorageCard = () => {
    const cards = localStorage.getItem('card');
    return cards ? JSON.parse(cards) : [];
}

//state incial de nuestro reducer (falta poner localStorage)
export const inicialStateCard = {
    card: localStorageCard()
}

//reducer principar, la fuente de verdad jejej
export const CardReducer = (state, action) => {
    switch (action.type) {
        case (CARD_TYPE.ADD):
            return {
                card: [...state.card, { ...action.payload, id: uuidv4() }]
            }
        default:
            return state
    }
}