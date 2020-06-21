import { createContext } from "react"

const initialTransactions = [

    {amount: +400, desc: "cash"},
    {amount: -140, desc: "book"},
    {amount: -200, desc: "pen-set"}
]

export const TransactionContext = createContext(initialTransactions);