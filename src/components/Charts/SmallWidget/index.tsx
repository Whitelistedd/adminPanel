import { ProgressCircle } from '../index'
import React from 'react'
import styled from 'styled-components'

interface SmallWidgetProps {
  title: string
  PercentageNum: string
  TotalNum: string
  icon: JSX.Element
}

export const SmallWidget: React.FC<SmallWidgetProps> = ({
  title,
  PercentageNum,
  TotalNum,
  icon,
}) => {
  return (
    <Container>
      <Details>
        {icon}
        <TotalNumber>{TotalNum}</TotalNumber>
        <Title>{title}</Title>
      </Details>
      <Data>
        <ProgressCircle size={45} progress={PercentageNum} />
        <PercentNum>{PercentageNum}%</PercentNum>
      </Data>
    </Container>
  )
}

const TotalNumber = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.general.white};
  font-weight: 900;
`

const Title = styled.p`
  font-size: 1rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${({ theme }) => theme.general.green};
`

const PercentNum = styled.p`
  color: ${({ theme }) => theme.general.green};
  font-style: italic;
`

const Data = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const Container = styled.div`
  padding: 2em;
  background-color: ${({ theme }) => theme.background.secondary};
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
