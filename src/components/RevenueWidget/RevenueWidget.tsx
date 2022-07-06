import React, { useState } from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import 'react-circular-progressbar/dist/styles.css';

import { Stats } from '../Stats/Stats';
import { StatsList } from '../../data/componentsData';
import { ProgressCircularBar } from '../ProgressCircularBar/ProgressCircularBar';

export const RevenueWidget : React.FC = () => {

  const [percentage,setPercentage] = useState(70)

  return (
    <Container>
      <Top>
        <Name>Total Revenue</Name>
        <MoreVertIcon />
      </Top>
      <ProgressCircularBar valueStart={0} valueEnd={percentage} />
      <Title>Total sales made today</Title>
      <Amount>$4200</Amount>
      <Desc>Previous transactions processing. Last payments may not be included</Desc>
      <Stats List={StatsList} numbers={12.4} />
    </Container>
  )
}

const Desc = styled.p`
`

const Amount = styled.p`
  font-size: 2em;
  color: black;
`


const Title = styled.p`
  font-size: 1.1em;
`

const Name = styled.h3``

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1em;
  align-items: center;
  color: grey;
  gap: 1.5em;
  box-shadow: 2px 4px 10px 1px rgb(201, 201, 201, 0.47);
  border-radius: 10px;
  font-size: 17px;
`