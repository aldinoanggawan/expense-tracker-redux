import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: [],
  message: '',
  error: '',
}

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_TRANSACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload.data],
        message: action.payload.message,
      }
    case actionTypes.CREATE_TRANSACTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actionTypes.READ_TRANSACTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.READ_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.READ_TRANSACTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case actionTypes.DELETE_TRANSACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: state.data.filter(
          transaction => transaction.id !== action.payload
        ),
      }
    case actionTypes.DELETE_TRANSACTION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default transactions
