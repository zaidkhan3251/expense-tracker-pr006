import React from 'react';
import './App.css';



function Child() {
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

                <li>
                    <span>cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>cash</span>
                    <span>+500</span>
                </li>
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
                <input type="submit" value="add Transaction" />
            </form>
        </div>
    );
}

export default Child;

