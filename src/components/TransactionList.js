import React from 'react'
import styled from 'styled-components'
import Transaction from './Transaction'

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
  return (
    <Article>
      <H2>Transaction History</H2>
      <Ul>
        <Transaction />
      </Ul>
    </Article>
  )
}

export default TransactionList
