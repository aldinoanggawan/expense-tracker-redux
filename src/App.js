import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

const Div = styled.div`
  background: #89aec5;
`

const Container = styled.div`
  padding: 1em 0;
  width: 85%;
  max-width: 450px;
  margin: 0 auto;
`

const App = () => {
  const isLoading = useSelector(state => state.transactions.isLoading)

  console.log(isLoading)
  return (
    <Div>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Container>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </Container>
    </Div>
  )
}

export default App
