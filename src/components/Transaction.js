import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  border-radius: 2px;
  padding: 0.65em 1em;
  background: #fbfafb;

  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
  box-shadow: 0 10px 20px -12px rgba(0, 0, 0, 0.42),
    0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  &.plus {
    border-right: 4px solid green;
  }

  &.minus {
    border-right: 4px solid #f44336;
  }

  & + & {
    margin-top: 1em;
  }

  &:hover Button,
  &:focus Button {
    opacity: 1;
  }
`

const Span = styled.span`
  letter-spacing: 0.5px;
`

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  background: #f44336;
  color: #fbfafb;
  border: none;
  height: 24px;
  transform: translate(-180%, -7%);
  opacity: 0;
  transition: opacity 350ms ease;
`

const Transaction = ({ text, amount }) => {
  const sign = amount > 0 ? '+' : '-'
  const indicator = amount > 0 ? 'plus' : 'minus'

  return (
    <>
      <Li className={indicator}>
        <Button>X</Button>
        <span>{text}</span>
        <Span>
          {sign}${Math.abs(amount).toFixed(2)}
        </Span>
      </Li>
    </>
  )
}

export default Transaction
