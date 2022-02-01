import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from './InAndOut.module.css'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction);

  const income = amounts
    .filter(item => item.type === 'Income')
    .reduce((acc, item) => (acc += item.amount), 0)
    .toFixed(2);

  const expense = (
    amounts
    .filter(item => item.type === 'Expense')
    .reduce((acc, item) => (acc += item.amount), 0) *
    -1
  ).toFixed(2);

  return (
    <div className={styles.contain}>
        <div className={styles.content}>
            <h4 className={styles.title}>Income</h4>
            <p className={styles.income}>{income}</p>
        </div>
        <div className={styles.content}>
            <h4 className={styles.content}>Expense</h4>
            <p className={styles.expense}>{expense}</p>
        </div>
      </div>
  )
}