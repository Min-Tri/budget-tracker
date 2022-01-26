import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className='my-3 mr-auto'>
            <h4 className='uppercase text-lg font-medium'>Your Total Balance</h4>
            <h1 className='tracking-wide text-2xl font-semibold'>${total}</h1>
        </div>
    )
}