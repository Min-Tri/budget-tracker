import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="shadow-lg p-4 flex justify-between my-7 ">
        <div className='flex-1 text-center mx-10 border-solid'>
            <h4 className='uppercase text-lg font-medium'>Income</h4>
            <p className="text-lg tracking-wide my-1 text-lime-600">{income}</p>
        </div>
        <div className='flex-1 text-center mx-10 border-solid'>
            <h4 className='uppercase text-lg font-medium'>Expense</h4>
            <p className="text-lg tracking-wide my-1 text-rose-600">{expense}</p>
        </div>
      </div>
  )
}