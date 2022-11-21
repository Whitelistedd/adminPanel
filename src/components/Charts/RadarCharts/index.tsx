import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

import styled from 'styled-components'

interface RadarChartsProps {
  data: Array<{
    subject: string
    A: number
    B: number
    fullMark: number
  }>
  className?: string
}

export const RadarCharts: React.FC<RadarChartsProps> = ({
  data,
  className,
}) => {
  return (
    <Container className={className}>
      <Header>Geography Based Traffic</Header>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            inset: 'unset',
          }}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  )
}

const Header = styled.div`
  color: white;
`

const Container = styled.div`
  padding: 2em;
  width: 100%;
  min-width: 474px;
  min-height: 330px !important;
  flex: 1;
  position: relative;
  background: ${({ theme }) => theme.background.secondary};
`
