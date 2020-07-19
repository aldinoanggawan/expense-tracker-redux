import Axios from 'axios'
import { toast } from 'react-toastify'
import * as actionTypes from './actionTypes'

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
        'https://redux-expense-tracker.herokuapp.com/api/v1/transactions',
        newTransaction,
        config
      )
      const transaction = await response.data
      dispatch(createTransactionSuccess(transaction))
      toast.success('✅ Transaction Added', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      })
    } catch (error) {
      const errorMsg = error.message
      dispatch(createTransactionFailure(errorMsg))
      toast.error('⛔️ Uh-oh something went wrong. Make sure you enter the right amount.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      })
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
        'https://redux-expense-tracker.herokuapp.com/api/v1/transactions'
      )
      const transactions = await response.data.data
      dispatch(readTransactionsSuccess(transactions))
    } catch (error) {
      const errorMsg = error.error
      dispatch(readTransactionsFailure(errorMsg))
    }
  }
}

export const deleteTransactionRequest = () => ({
  type: actionTypes.DELETE_TRANSACTION_REQUEST,
})

const deleteTransactionSuccess = id => ({
  type: actionTypes.DELETE_TRANSACTION_SUCCESS,
  payload: id,
})

const deleteTransactionFailure = error => ({
  type: actionTypes.DELETE_TRANSACTION_FAILURE,
  payload: error,
})

export const deleteTransaction = id => {
  return async dispatch => {
    dispatch(deleteTransactionRequest())
    try {
      await Axios.post(`https://redux-expense-tracker.herokuapp.com/api/v1/transaction/${id}`)
      dispatch(deleteTransactionSuccess(id))
      toast.error('✅ Transaction Deleted', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      })
    } catch (error) {
      const errorMsg = error.error
      dispatch(deleteTransactionFailure(errorMsg))
    }
  }
}
