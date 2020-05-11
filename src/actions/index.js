import {
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
} from './actionTypes'
import Axios from 'axios'

export const createTransactionRequest = () => ({
  type: CREATE_TRANSACTION_REQUEST,
})

const createTransactionSuccess = transaction => ({
  type: CREATE_TRANSACTION_SUCCESS,
  payload: transaction,
})

const createTransactionFailure = error => ({
  type: CREATE_TRANSACTION_FAILURE,
  payload: error,
})

export const createTransaction = newTransaction => {
  return async dispatch => {
    dispatch(createTransactionRequest())
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const response = await Axios.post(
        'http://127.0.0.1:5000/api/v1/transactions',
        newTransaction,
        config
      )
      const transaction = await response.data
      dispatch(createTransactionSuccess(transaction))
    } catch (error) {
      const errorMsg = error.error
      dispatch(createTransactionFailure(errorMsg))
    }
  }
}
