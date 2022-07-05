import React from 'react'
import styled from 'styled-components'

import { NavListProps } from '../../../types'
import { NavLocation } from '../NavLocation/NavLocation'

export const NavList : React.FC<NavListProps> = ({listName,NavList}) => {
  return (
    <Container>
        {listName}
        {
            NavList.map(List => 
                <NavLocation title={List.title} icon={List.icon} />
            )
        }
    </Container>
  )
}

const Container = styled.ul`
    padding: 1em;
    margin: 0em;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    font-weight: 700;
    color: grey;
    svg {
        color: #6E57FE;
    }
`