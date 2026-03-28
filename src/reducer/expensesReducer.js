import { v4 as uuidv4 } from "uuid"

//centralizamos los tipos de accion que hay
export const EXPESES_TYPE = {
    ADD: 'add-expense',
    DELETE: 'delete-expense',
    UPDATE: 'update-expense'
}

//definimos los actions(add, update, delete)
export const ExpenseActions = {
    addExpense: (expense) => ({
        type: EXPESES_TYPE.ADD,
        payload: expense
    }),
    updateExpense: (expense) => ({
        type: EXPESES_TYPE.UPDATE,
        payload: expense
    }),
    deleteExpense: () => ({
        type: EXPESES_TYPE.DELETE,
        payload: { id: expenses.id }
    })
}

//Creacion del localStorage
const localStorageApp = () => {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : []
}

//State Inicial
export const inicialState = {
    expenses: localStorageApp()
}

//Reducer Principal
export const ExpenseReducer = (state, action) => {

    switch (action.type) {
        //Action para añadir gasto
        case (EXPESES_TYPE.ADD):
            return {
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
