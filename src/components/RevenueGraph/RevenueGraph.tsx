import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer,Area } from 'recharts';


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
    flex: 2;
    height: 100%;
    box-shadow: 2px 2px 20px rgb(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 1em;
    width: 100%;
    div {
      width: 100%;
      height: 100%;
    }
`
