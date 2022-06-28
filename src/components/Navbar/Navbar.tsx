import React from 'react'
import styled from 'styled-components'
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';

export const Navbar : React.FC = () => {
  return (
    <Container>
      <SearchWrap>
        <Searchbar type="text" placeholder="Search..." />
        <SearchIcon />
      </SearchWrap>
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
`

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
  list-style: none;
`

const Searchbar = styled.input`
  padding: 0.8em 0em;
  border: none
`

const SearchWrap = styled.div`
  padding: 0em 0.5em;
  display: flex;
  align-items: center;
  border: 1px solid black;
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    width: 100%;
    height: 70px;
    border-bottom: 2px solid #F8F8F8;
    color: #3d3d3d;
`
