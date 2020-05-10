import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  border-radius: 2px;
  border-right: 4px solid #f44336;
  padding: 0.65em 1em;
  background: #fbfafb;

  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42),
    0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 1em;
  }
`

const Span = styled.span`
  letter-spacing: 0.5px;
`

const Transaction = () => {
  return (
    <>
      <Li>
        <span>Keyboard</span>
        <Span>-$100.00</Span>
      </Li>
      <Li>
        <span>Mouse</span>
        <Span>-$50.00</Span>
      </Li>
      <Li>
        <span>Headphones</span>
        <Span>-$200.00</Span>
      </Li>
    </>
  )
}

export default Transaction
