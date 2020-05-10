import React from 'react'
import styled from 'styled-components'

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
  return (
    <Div>
      <H2>Balance</H2>
      <Span>$0.00</Span>
    </Div>
  )
}

export default Balance
