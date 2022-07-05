import React from 'react'
import styled from 'styled-components'

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
    padding: 0.5em;
    width: 20%;
    height: 150px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`