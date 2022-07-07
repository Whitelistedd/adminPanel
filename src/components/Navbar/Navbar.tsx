import React, { useState } from 'react'
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
import { LeftNav } from '../LeftNav/LeftNav';

export const Navbar : React.FC = () => {

  const [mobileNavDisplay,setMobileNavDisplay] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavDisplay(prev => prev ? false : true)
  }

  return (
    <Container>
      <MobileMenuIcon onClick={() => toggleMobileNav()} />
      <MobileNavContainer onClick={() => toggleMobileNav()} mobileNavDisplay={mobileNavDisplay} />
      <MobileLeftNav mobileNavDisplay={mobileNavDisplay} />
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

const MobileNavContainer = styled.div<{mobileNavDisplay: boolean}>`
  display: ${props => props.mobileNavDisplay ? "flex" : "none"};
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: #0000006f;
  top: 0;
  left: 0;
  z-index: 2;
`

const MobileLeftNav = styled(LeftNav)<{mobileNavDisplay: boolean}>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0%;
  background-color: white;
  height: 100%;
  transform: translateX(${props => props.mobileNavDisplay ? "0px" : "-200px"});
  z-index: 3;
  transition: 300ms ease;
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
