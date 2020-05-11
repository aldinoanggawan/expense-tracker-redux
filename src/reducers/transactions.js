import {
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_FAILURE,
} from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: [],
  message: '',
  error: '',
}

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRANSACTION_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case CREATE_TRANSACTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload.data],
        message: action.payload.message,
      }
    case CREATE_TRANSACTION_FAILURE:
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
