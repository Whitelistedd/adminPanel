import {
  Bar,
  CartesianGrid,
  Legend,
  BarChart as ReBarchart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import styled from 'styled-components'

interface BarChartProps {
  data: Array<{
    name: string
    quantity: number
  }>
  className?: string
}

export const BarChart: React.FC<BarChartProps> = ({ data, className }) => {
  return (
    <Container className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <ReBarchart
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" stackId="a" fill="#8884d8" />
          <Bar dataKey="profit" stackId="a" fill="#82ca9d" />
        </ReBarchart>
      </ResponsiveContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  flex: 1;
  min-width: 474px;
  min-height: 330px !important;
  background: ${({ theme }) => theme.background.secondary};
`
