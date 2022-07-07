import React from 'react'
import styled from 'styled-components'
import { devices } from '../../MediaQueries';

import { SmallWidgetProps } from '../../types';

export const SmallWidget : React.FC<SmallWidgetProps> = ({title,PercentageNum,TotalNum,Link,icon,isCurrency}) => {
  return (
    <Container>
        <WidgetTop>
            <Title>{title}</Title>
            <Percentage>{PercentageNum}%</Percentage>
        </WidgetTop>
        <TotalNumber>{isCurrency && "$"}{TotalNum}</TotalNumber>
        <WidgetBottom>
            <PageLink>{Link}</PageLink>
            {icon}
        </WidgetBottom>
    </Container>
    )
}

const PageLink = styled.p`
    text-decoration: underline;
`

const WidgetBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 40px;
        height: 40px;
    }
`

const TotalNumber = styled.p`
    font-size: 2em;
`

const Percentage = styled.p`
    color: green;
`

const Title = styled.p`
    font-weight: 700;
    color: grey;
`

const WidgetTop = styled.div`
    display: flex;
    justify-content: space-between;
`

const Container = styled.div`
    box-shadow: 2px 4px 10px 1px rgb(201, 201, 201, 0.47);
    padding: 0.8em;
    width: 20%;
    min-width: 150px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: ${devices.Desktop}) {
        font-size: 14px;
    }
    @media only screen and (max-width: ${devices.Laptop}) {
        font-size: 11px;
        height: 120px;
        ${WidgetBottom} {
            svg {
                width: 30px;
                height: 30px;
            }
        }
    }
    @media only screen and (max-width: ${devices.Tablet}) {
        font-size: 8px;
        height: 90px;
        ${WidgetBottom} {
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    @media only screen and (max-width: ${devices.mobile}) {
    }
`