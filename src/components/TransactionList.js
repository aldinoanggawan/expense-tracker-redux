import React, { useEffect } from 'react'
import styled from 'styled-components'
import Transaction from './Transaction'
import { useDispatch, useSelector } from 'react-redux'
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

const TransactionList = () => {
  const transactions = useSelector(state => state.transactions.data)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.readTransactions())
    // eslint-disable-next-line
  }, [])

  return (
    <Article>
      <H2>Transaction History</H2>
      <Ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </Ul>
    </Article>
  )
}

export default TransactionList
