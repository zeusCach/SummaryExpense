export type Expenses = {
    id: string,
    name: string
    amount: number
    category: string
    date: string // date para análisis temporal a futuro
}


export type Card = {
    name: string,
    type: string,
    number: string,
    user: string,
}