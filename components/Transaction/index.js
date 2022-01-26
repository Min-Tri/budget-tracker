import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'flex my-2 bg-white shadow-lg justify-between border-r-4 p-2 border-rose-600' : 'relative flex my-2 bg-white shadow-lg justify-between border-r-4 p-2 border-lime-600'}>
        {transaction.text} 
        <div>
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="cursor-pointer bg-rose-400 rounded-full leading-relaxed px-3 text-lg ml-2">x</button>
        </div>
    </li>        
  )
}