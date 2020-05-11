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

const Transaction = () => {
  return (
    <>
      <Li>
        <Button>X</Button>
        <span>Keyboard</span>
        <Span>-$100.00</Span>
      </Li>
      <Li>
        <Button>X</Button>
        <span>Mouse</span>
        <Span>-$50.00</Span>
      </Li>
      <Li>
        <Button>X</Button>
        <span>Headphones</span>
        <Span>-$200.00</Span>
      </Li>
    </>
  )
}

export default Transaction
