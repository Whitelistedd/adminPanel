import { ProgressCircle } from '../index'
import React from 'react'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const RevenueWidget: React.FC = () => {
  return (
    <Container>
      <Name>Campaign</Name>
      <StyledProgressCircle progress={70} />
      <Details>
        <Title>$48,352 revenue generated</Title>
        <Desc>Includes extra misc expenditures and costs</Desc>
      </Details>
    </Container>
  )
}

const Desc = styled.p`
  text-align: center;
`

const Title = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.general.green};
`

const Name = styled.h3`
  width: 100%;
  font-size: 1.1rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledProgressCircle = styled(ProgressCircle)`
  width: 125px;
  height: 125px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 2em;
  align-items: center;
  color: white;
  gap: 1.5em;
  flex: 1;
  min-width: 474px;
  min-height: 330px !important;
  font-size: 1.05rem;
  @media only screen and (max-width: ${devices.Desktop}) {
    max-height: 500px;
  }
`
