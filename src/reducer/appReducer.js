
//centralizamos los tipos de accion que hay
export const EXPESES_TYPE = {
    ADD: 'add-expense',
    DELETE: 'delete-expense',
    UPDATE: 'update-expense'
}

//definimos los actions
export const ExpenseActions = {
    addExpense: (expense) => ({
        type: EXPESES_TYPE.ADD,
        payload: expense
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
        case (EXPESES_TYPE.ADD):
            return {
                expenses: [...state.expenses, action.payload]
            }


        default:
            return state
    }
}