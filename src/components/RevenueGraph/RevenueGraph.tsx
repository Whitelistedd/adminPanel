import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer,Area } from 'recharts';
import { devices } from '../../MediaQueries';


export const RevenueGraph = ({ChartData} : { ChartData: any[]}) => {
  return (
    <Container>
      <ResponsiveContainer width="100%" aspect={2 / 1} >
        <StyledLineChart data={ChartData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </StyledLineChart>
      </ResponsiveContainer>
    </Container>
  )
}

const StyledLineChart = styled(LineChart)`
`

const Container = styled.div`
    max-height: 100%;
    box-shadow: 2px 4px 10px 1px rgb(201, 201, 201, 0.47);
    border-radius: 10px;
    padding: 1em;
    width: 100%;
    min-width: 300px;
    div {
      width: 100%;
      min-width: 40vw;
      height: 100%;
    }

    @media only screen and (max-width: ${devices.mobile}) {
      width: 100%;
      padding: 1em 1em 1em 0em;
      div {
        width: 100%;
        min-width: 100%;
        height: 100%;
      }
    }
`
