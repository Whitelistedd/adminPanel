import React from 'react'
import styled from 'styled-components'
import { LayoutProps } from '../../types'
import { LeftNav } from '../LeftNav/LeftNav'
import { Navbar } from '../Navbar/Navbar'

export const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <Container>
        <LeftNav />
        <Wrap>
            <Navbar />
            {children}
        </Wrap>
  </Container>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex: 1;
`
