import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import styled from 'styled-components'
import { devices } from '../../MediaQueries'

import { ProgressProps } from '../../types'
import { ProgressProvider } from '../ProgressProvider/ProgressProvider'

export const ProgressCircularBar : React.FC<ProgressProps> = ({valueStart, valueEnd}) => {
  return (
    <ProgressProvider valueStart={valueStart} valueEnd={valueEnd} >
    {(value : number) => <StyledCircularProgressbar value={value} text={`${value}%`} />}
  </ProgressProvider>
  )
}

const StyledCircularProgressbar = styled(CircularProgressbar)`
  width: 10vw;
  @media only screen and (max-width: ${devices.mobile}) {
    width: 20vw
  }
`