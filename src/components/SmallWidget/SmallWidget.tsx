import React from 'react'
import styled from 'styled-components'
import { SmallWidgetProps } from '../../types';

export const SmallWidget : React.FC<SmallWidgetProps> = ({title,PercentageNum,TotalNum,Link,icon}) => {
  return (
    <Container>
        <WidgetTop>
            <Title>{title}</Title>
            <Percentage>{PercentageNum}%</Percentage>
        </WidgetTop>
        <TotalNumber>{TotalNum}</TotalNumber>
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
        color: #f56f6f;
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
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1);
    padding: 0.5em;
    width: 20%;
    height: 150px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`