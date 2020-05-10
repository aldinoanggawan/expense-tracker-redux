import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  color: #fbfafb;
`

const H1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  font-size: 2rem;
  line-height: 0.9;
`

const Header = () => {
  return (
    <HeaderContainer>
      <H1>expense tracker</H1>
    </HeaderContainer>
  )
}

export default Header
