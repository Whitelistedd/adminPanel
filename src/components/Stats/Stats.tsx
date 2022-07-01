import React from 'react'
import styled from 'styled-components'
import { StatsProps } from '../../types'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const Stats : React.FC<StatsProps> = ({List,numbers}) => {
  return (
    <Container>
      {
        List.map(stat => 
          <Stat >
            <StatTitle>{stat}</StatTitle>
            <Numbers>
              <KeyboardArrowUpIcon />
              <StatNumber>${numbers}k</StatNumber>
            </Numbers>
          </Stat> 
        )
      }
    </Container>
  )
}

const StatTitle = styled.p``

const StatNumber = styled.p``

const Numbers = styled.div`
  display: flex;
  color: green;
`

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`