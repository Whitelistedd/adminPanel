import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { NavLocationsProps } from '../../../types'

export const NavLocation : React.FC<NavLocationsProps> = ({icon,title}) => {
  return (
    <NavLink to={title === "Dashboard" ? `/` : `/${title}` } >
      <Container>
          {icon}
          {title}
      </Container>  
    </NavLink>
  )
}

const Container = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-weight: 500;
    padding-left: 0.5em;
    &:hover {
        cursor: pointer;
    }
`
