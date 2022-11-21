import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Badge } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import styled from 'styled-components'

export const Navbar: React.FC = () => {
  return (
    <Container>
      <NavList>
        <Language>
          <LanguageIcon />
          English
        </Language>
        <Badge badgeContent={1} color="primary">
          <NotificationsNoneOutlinedIcon />
        </Badge>
        <AccountCircleIcon />
        <SettingsIcon />
      </NavList>
    </Container>
  )
}

const Language = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
  list-style: none;
`

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  width: 100%;
  height: 70px;
  color: white;
`
