import React from 'react'
import styled from 'styled-components'
import { NavLocationsProps } from '../../../types'

export const NavLocation : React.FC<NavLocationsProps> = ({icon,title}) => {
  return (
    <Container>
        {icon}
        {title}
    </Container>  
  )
}

const Container = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5em;
    font-weight: 600;
    padding-left: 0.5em;
    &:hover {
        cursor: pointer;
    }
`
