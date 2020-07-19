import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Div = styled.div`
  margin-top: 3em;
  color: #fbfafb;
`

const H2 = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`

const Span = styled.span`
  letter-spacing: 3px;
  font-size: 1.2rem;
`

const Balance = () => {
  const transactionsState = useSelector(state => state.transactions)
  const transactions = transactionsState.data
  const isLoading = transactionsState.isLoading

  const amounts = transactions.map(transaction => transaction.amount)
  const totalBalance = amounts
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2)

  return (
    <Div>
      <H2>Balance</H2>
      {isLoading ? <Span>Loading...</Span> : <Span>${totalBalance}</Span>}
    </Div>
  )
}

export default Balance
