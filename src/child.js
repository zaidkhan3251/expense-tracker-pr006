import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext';
import './App.css';



function Child() {
    let {transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) =>{
        event.preventDefault();
        if(Number(newAmount) === 0){
            alert("Please enter correct value");
            return false;
        }
            
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc

        })
    }
    const getIncome = () => {
        let Income = 0;
        for (var i = 0; i<transactions.length; i++){
            if (transactions[i].amount>0)
            Income+=transactions[i].amount
        }
        return Income;

    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i<transactions.length; i++){
            if (transactions[i].amount>0)
            expense+=transactions[i].amount
        }
        return expense;

    }

    return (
        <div className="container">
            <h1 className="text-container">Expense Tracker</h1>
            <h3>Your Balance<br />{getIncome()+getExpense()}</h3>
            <div className="expense-container"> 
            
                <h3>INCOME <br />{getIncome()}</h3>
                <h3>EXPENSE<br />{getExpense()}</h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind)=>{
                    return( <li key={ind}> 
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>

                    )
                })}
            </ul>
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br />
                    <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Enter Amount<br />
                    <input type="number" onChane={(ev)=>setAmount(ev.target.value)} />
                </label>
                <br />
                <br />
                <input className='submit-button' type="submit" value="add Transaction" />
            </form>
        </div>
    );
}

export default Child;

