import Fonts from 'FontInjection'
import { LeftNav } from 'components/LeftNav'
import { Navbar } from 'components/Elements'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
  const [header, setHeader] = useState({
    title: '',
    desc: '',
  })

  return (
    <Container>
      <Fonts />
      <LeftNav />
      <Wrap>
        <Navbar />
        <Typography
          variant="h1"
          sx={{ pl: 4, pb: 5, fontSize: 32, fontWeight: 600, color: 'white' }}
        >
          {header.title}
          <Typography sx={{ fontSize: 16, color: '#4CCEAC' }}>
            {header.desc}
          </Typography>
        </Typography>
        <Outlet context={{ header, setHeader }} />
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
  background-color: ${({ theme }) => theme.background.primary};
  * {
    font-family: 'Nunito';
  }
`
