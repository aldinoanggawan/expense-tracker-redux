import React from 'react'
import styled from 'styled-components'

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

const Form = styled.form``

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
`

const Button = styled.button`
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
`

const AddTransaction = () => {
  return (
    <Article>
      <H2>Add Transaction</H2>
      <Form>
        <div>
          <Label>Text</Label>
          <Input type='text' placeholder='Enter text...' />
        </div>
        <div>
          <Label>Amount</Label>
          <Input type='number' placeholder='Enter amount...' />
        </div>
        <Button>Add</Button>
      </Form>
    </Article>
  )
}

export default AddTransaction
