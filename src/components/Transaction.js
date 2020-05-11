import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'
import { toast } from 'react-toastify'

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

const Transaction = ({ id, text, amount }) => {
  const dispatch = useDispatch()

  const sign = amount > 0 ? '+' : '-'
  const indicator = amount > 0 ? 'plus' : 'minus'

  const handleClick = () => {
    dispatch(actions.deleteTransaction(id))
    toast.error('✅ Transaction Deleted', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    })
  }

  return (
    <>
      <Li className={indicator}>
        <Button onClick={handleClick}>X</Button>
        <span>{text}</span>
        <Span>
          {sign}${Math.abs(amount).toFixed(2)}
        </Span>
      </Li>
    </>
  )
}

export default Transaction
