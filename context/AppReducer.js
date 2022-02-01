export default function AppReducer(state, action){
  let transact
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      transact={
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      localStorage.setItem('transactions',JSON.stringify(transact))
      return transact
    case 'ADD_TRANSACTION':
      transact={
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
      localStorage.setItem('transactions',JSON.stringify(transact))
      return transact
    default:
      return state;
  }
}