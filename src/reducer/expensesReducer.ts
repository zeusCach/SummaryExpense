import { v4 as uuidv4 } from "uuid"
import { Expenses } from "../types"

//tipamos el state del expense
export type ExpenseState = {
    expenses: Expenses[]
}
//centralizamos los tipos de accion que hay
export const EXPESES_TYPE = {
    ADD: 'add-expense',
    DELETE: 'delete-expense',
    UPDATE: 'update-expense'
} as const

//definimos los actions(add, update, delete)
export type ExpenseActions =
    | { type: typeof EXPESES_TYPE.ADD, payload: Expenses }
    | { type: typeof EXPESES_TYPE.UPDATE, payload: Expenses }
    | { type: typeof EXPESES_TYPE.DELETE, payload: { id: string } }


// export const ExpenseActisons = {
//     addExpense: (expense) => ({
//         type: EXPESES_TYPE.ADD,
//         payload: expense
//     }),
//     updateExpense: (expense) => ({
//         type: EXPESES_TYPE.UPDATE,
//         payload: expense
//     }),
//     deleteExpense: () => ({
//         type: EXPESES_TYPE.DELETE,
//         payload: { id: expenses.id }
//     })
// }

//Creacion del localStorage
const localStorageApp = () => {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : []
}

//State Inicial
export const inicialState: ExpenseState = {
    expenses: localStorageApp()
}

//Reducer Principal
export const ExpenseReducer = (
    state: ExpenseState = inicialState, action: ExpenseActions
) => {

    switch (action.type) {
        //Action para añadir gasto
        case (EXPESES_TYPE.ADD):
            return {
                ...state,
                expenses: [...state.expenses, { ...action.payload, id: uuidv4() }]
            }

        //Action para actualizar gasto
        case (EXPESES_TYPE.UPDATE):
            return {
                ...state,
                expenses: state.expenses.map(expense => expense.id === action.payload.id
                    ? action.payload
                    : expense
                )

            }
        //Action para eliminar gasto
        case (EXPESES_TYPE.DELETE):
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
            }

        default:
            return state
    }
}
