import React, { createContext,useReducer } from "react"
import TransactionReducer from './transReducer';

const initialTransactions = [

    {amount: +400, desc: "cash"},
    {amount: -140, desc: "book"},
    {amount: -200, desc: "pen-set"}
]

export const TransactionContext = createContext(initialTransactions);



export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type: "ADD TRANSACTION",
            payload: {
                amount: transObj.amount, 
                desc: transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )

}