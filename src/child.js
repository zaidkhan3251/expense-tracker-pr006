import React from 'react';
import './App.css';



function Child() {
    let transactions = [

        {amount: +500, desc: "cash"}
        {amount: -40, desc: "book"}
        {amount: -200, desc: "pen-set"}
    ]
    return (
        <div className="container">
            <h1 className="text-container">Expense Tracker</h1>
            <h3>Your Balance<br /> $260</h3>
            <div className="expense-container"> 
            
                <h3>INCOME <br /> $500</h3>
                <h3>EXPENSE<br /> $240</h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {transactions.map((transObj, ind)=>{
                    return( <li>
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>

                    )
                })}
            </ul>
            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form">
                <label>
                    Enter Description<br />
                    <input type="text" required />
                </label>
                <br />
                <label>
                    Enter Amount<br />
                    <input type="number" />
                </label>
                <br />
                <br />
                <input className='submit-button' type="submit" value="add Transaction" />
            </form>
        </div>
    );
}

export default Child;

