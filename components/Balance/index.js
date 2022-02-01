import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import styles from './Balance.module.css'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction);

  const total = amounts.reduce((acc, item) => (item.type === 'Expense' ? acc - item.amount : acc + item.amount), 0).toFixed(2);
    return (
        <div className={styles.contain}>
            <h4 className={styles.title}>Your Total Balance</h4>
            <h1 className={styles.total}>${total}</h1>
        </div>
    )
}