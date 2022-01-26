import React, { useContext } from 'react';
import { Transaction } from '../Transaction';

import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className='border-b-2 w-full pb-2 text-lg font-medium'>History</h3>
      <ul className="mb-2 p-0 list-none">
        {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}