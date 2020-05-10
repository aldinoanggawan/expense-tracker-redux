import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background: #fbfafb;
  padding: 1em 0;
  margin: 2em 1.5em;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);

  span {
    letter-spacing: 1.5px;
  }
`

const LeftItem = styled.div`
  width: 100%;
  text-align: center;
  border-right: 1px solid gray;

  & h3 {
    margin: 0 0 0.3em;
    color: #449d6b;
  }
`

const RightItem = styled.div`
  width: 100%;
  text-align: center;

  & h3 {
    margin: 0 0 0.3em;
    color: #f44336;
  }
`

const IncomeExpense = () => {
  return (
    <Box>
      <LeftItem>
        <h3>Income</h3>
        <span>$0.00</span>
      </LeftItem>
      <RightItem>
        <h3>Expense</h3>
        <span>$0.00</span>
      </RightItem>
    </Box>
  )
}

export default IncomeExpense
