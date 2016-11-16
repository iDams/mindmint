import React from 'react'
import styled, { keyframes } from 'styled-components'

import logo from './logo.svg'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const WrapperHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
`

const Title = styled.h2`
  color: palevioletred;
`

const Logo = styled.img`
  height: 80px;
  animation: ${rotate360} infinite 20s linear;
`

const Header = () =>
  <WrapperHeader>
    <Logo src={logo} alt="logo" />
    <Title>Welcome to React</Title>
  </WrapperHeader>

export default Header
