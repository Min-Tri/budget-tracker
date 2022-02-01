import React, { useContext } from 'react';
import { Transaction } from '../Transaction';
import styles from './TransactionList.module.css'
import { GlobalContext } from '../../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className={styles.title}>History</h3>
      <ul className={styles.list}>
        {transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  )
}