import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'

const Article = styled.article`
  margin: 3em 0 0;
  background: #fbfafb;
  color: #513d40;
  border: none;
  border-radius: 5px;
  padding: 1em;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 1em;
`

const Label = styled.label`
  font-size: 1.2em;
  display: block;
`

const Input = styled.input`
  display: block;
  border: none;
  border-bottom: 1px solid gray;
  border-radius: 2px;
  margin-bottom: 1.5em;
  width: 99%;
  height: 35px;
  font-size: 0.9rem;
  background: #fbfafb;

  &:focus {
    outline: none;
  }

  &.btn {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: bold;
    width: 100%;
    height: 35px;
    background: #3073a9;
    color: white;
    border: none;
    border-radius: 3px;

    &:hover,
    &:focus {
      opacity: 0.85;
    }

    &:disabled {
      cursor: default;
      opacity: 0.4;
    }
  }
`

const AddTransaction = () => {
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')

  const handleInputText = e => {
    setText(e.target.value)
  }

  const handleInputAmount = e => {
    setAmount(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newTransaction = {
      text,
      amount: +amount,
    }

    dispatch(actions.createTransaction(newTransaction))
    setText('')
    setAmount('')
  }

  return (
    <Article>
      <H2>Add Transaction</H2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Text</Label>
          <Input
            onChange={handleInputText}
            value={text}
            type='text'
            placeholder='Enter text...'
          />
        </div>
        <div>
          <Label>Amount</Label>
          <Input
            onChange={handleInputAmount}
            value={amount}
            type='number'
            step='0.01'
            placeholder='Enter amount...'
          />
        </div>
        <Input
          className='btn'
          disabled={!text || !amount}
          type='submit'
          value='Add'
        />
      </form>
    </Article>
  )
}

export default AddTransaction
