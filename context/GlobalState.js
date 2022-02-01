import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import useLocalStorage from '../hooks/useLocalStorage';

// Initial state
const initialState = {
  transactions: [
    {id:0,text:'Blacktea',amount:20,category:'Café',type:'Expense',date:'2022-01-01'}
  ]
}


// Create context
export const GlobalContext = ()=>{ 
  const [storedValue, setValue]=useLocalStorage('transactions',initialState)
  return createContext(setValue)
}

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}