import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Loader from './Loader'
import Transaction from './Transaction'
import * as actions from '../actions'

const Article = styled.article`
  margin-top: 2.5em;
`

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`

const H2 = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
  color: #fbfafb;
`

const P = styled.p`
  text-transform: uppercase;
  margin-top: 2em;
  color: #fbfafb;
  font-size: 1.1rem;
  text-align: center;
  opacity: 0.3;
`

const TransactionList = () => {
  const transactionsState = useSelector(state => state.transactions)
  const transactions = transactionsState.data
  const isLoading = transactionsState.isLoading

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.readTransactions())
    // eslint-disable-next-line
  }, [])

  return (
    <Article>
      <H2>Transaction History</H2>
      {isLoading ? (
        <Loader />
      ) : transactions.length > 0 ? (
        <Ul>
          {transactions.map(transaction => (
            <Transaction key={transaction.id} {...transaction} />
          ))}
        </Ul>
      ) : (
        <P>No transaction added</P>
      )}
    </Article>
  )
}

export default TransactionList
