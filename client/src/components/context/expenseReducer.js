import {ADD_TRANSACTION,REMOVE_TRANSACTION,TRANSACTION_FAIL,GET_TRANSACTIONS} from './types.js'

export default (state, action) => {
  switch (action.type) {
    
    case GET_TRANSACTIONS:
        return {
            ...state,
            transactions: action.payload
        }
    case TRANSACTION_FAIL:
        return {
            ...state,
            error: action.payload
        }
    
    case ADD_TRANSACTION:
        return {
            ...state,
            transactions:[...state.transactions,action.payload],
            
        }
    case REMOVE_TRANSACTION:
        return {
            ...state,
            transactions:state.transactions.filter(transaction => transaction._id !== action.payload )
        }
    default:
      return state;
  }
};
