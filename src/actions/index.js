import * as actionTypes from './actionTypes'
import Axios from 'axios'

export const createTransactionRequest = () => ({
  type: actionTypes.CREATE_TRANSACTION_REQUEST,
})

const createTransactionSuccess = transaction => ({
  type: actionTypes.CREATE_TRANSACTION_SUCCESS,
  payload: transaction,
})

const createTransactionFailure = error => ({
  type: actionTypes.CREATE_TRANSACTION_FAILURE,
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

export const readTransactionsRequest = () => ({
  type: actionTypes.READ_TRANSACTIONS_REQUEST,
})

const readTransactionsSuccess = transactions => ({
  type: actionTypes.READ_TRANSACTIONS_SUCCESS,
  payload: transactions,
})

const readTransactionsFailure = error => ({
  type: actionTypes.READ_TRANSACTIONS_FAILURE,
  payload: error,
})

export const readTransactions = () => {
  return async dispatch => {
    dispatch(readTransactionsRequest())
    try {
      const response = await Axios.get(
        'http://127.0.0.1:5000/api/v1/transactions'
      )
      const transactions = await response.data.data
      dispatch(readTransactionsSuccess(transactions))
    } catch (error) {
      const errorMsg = error.error
      dispatch(readTransactionsFailure(errorMsg))
    }
  }
}
