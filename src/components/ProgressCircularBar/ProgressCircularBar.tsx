import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import styled from 'styled-components'
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
  width: 200px;
`