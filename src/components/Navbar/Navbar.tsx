import React from 'react'
import styled from 'styled-components'
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';
import { devices } from '../../MediaQueries';

export const Navbar : React.FC = () => {
  return (
    <Container>
      <MobileMenuIcon />
      <NavList>
        <Language>
          <LanguageIcon />
          English
        </Language>
        <DarkModeOutlinedIcon />
        <Badge badgeContent={1} color="primary" >
          <NotificationsNoneOutlinedIcon />
        </Badge>
        <Badge badgeContent={2} color="primary" >
          <ModeCommentOutlinedIcon />
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
  font-size: 1em;
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
  list-style: none;
`

const MobileMenuIcon = styled(MenuIcon)`
  display: none !important;
`

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
    width: 100%;
    height: 70px;
    border-bottom: 2px solid #F8F8F8;
    color: #3d3d3d;

    @media only screen and (max-width: ${devices.mobile}) {
      justify-content: space-between;
      ${MobileMenuIcon} {
        display: block !important;
      }
      font-size: 13px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
`
