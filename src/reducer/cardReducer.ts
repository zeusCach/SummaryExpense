import { v4 as uuidv4 } from "uuid"
import { Card } from "../types"

//Tipamos nuestro state principal
export type CardState = {
    card: Card[]
}
//centralizamos los tipos de accion que hay
export const CARD_TYPE = {
    ADD: 'add-card',
    DELETE: 'delete-card',
    UPDATE: 'update-card'
} as const

//CardAction, controlador de las acciones que ejecutara nuestro reducee
export type CardAction =
    { type: typeof CARD_TYPE.ADD, payload: Card }

//localstorage
const localStorageCard = () => {
    const cards = localStorage.getItem('card');
    return cards ? JSON.parse(cards) : [];
}

//state incial de nuestro reducer (falta poner localStorage)
export const inicialStateCard: CardState = {
    card: localStorageCard()
}

//reducer principar, la fuente de verdad jejej
export const CardReducer = (
    state: CardState = inicialStateCard, action: CardAction
) => {
    switch (action.type) {
        case (CARD_TYPE.ADD):
            return {
                card: [...state.card, { ...action.payload, id: uuidv4() }]
            }
        default:
            return state
    }
}