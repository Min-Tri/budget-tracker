import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import styles from './Transaction.module.css'

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.type === 'Expense' ? '-' : '+';

  return (
    <li className={transaction.type === 'Expense' ? styles.expense : styles.income}>
        <div className={styles.content}>
          <h4 className={styles.title}>{transaction.text}</h4>
          <h5 className={styles.subtitle}>{transaction.category} - {transaction.date}</h5>          
        </div>

        <div className='flex'>
            <span className={styles.amount}>{sign}${Math.abs(transaction.amount)}</span>
            <div className='flex flex-col justify-center'>
              <button 
                onClick={() => deleteTransaction(transaction.id)} 
                className={styles.deletebtn}
              >
                
                <svg 
                  className={styles.icon} 
                  role="button"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                </svg>
                
              </button>
            </div>
        </div>
    </li>        
  )
}