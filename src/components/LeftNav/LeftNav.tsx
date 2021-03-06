import React from 'react'
import styled from 'styled-components'

import LogoImageSrc from "../../assets/images/basealpha.png"
import { LeftNavigationLists } from '../../data/componentsData';
import { devices } from '../../MediaQueries';
import { NavList } from './NavList/NavList';

export const LeftNav : React.FC = ({className} : {className?: string}) => {
  return (
    <Container className={className} >
        <Logo>
            <LogoImage src={LogoImageSrc} />
        </Logo>
        {
            LeftNavigationLists.map(List => 
                <NavList listName={List.listName} NavList={List.NavLocations} />  
            )
        }
    </Container>
  )
}

const LogoImage = styled.img`
    max-width: 100%;
    height: 100%;
`

const Logo = styled.div`
    height: 68px;
    border-bottom: 2px solid #F8F8F8;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 200px;
    height: 100%;
    border: 2px solid #F8F8F8;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${devices.mobile}) {
        display: none;
    }
`