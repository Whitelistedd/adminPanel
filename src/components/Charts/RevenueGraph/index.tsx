import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { Button } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import styled from 'styled-components'
import { useMemo } from 'react'

interface RevenueGraphProps {
  ChartData: Array<{
    name: string
    profit: number
  }>
  className?: string
}

export const RevenueGraph: React.FC<RevenueGraphProps> = ({
  ChartData,
  className,
}) => {
  const revenue = useMemo(() => {
    const allRevenue = ChartData.map((item) => item.profit)
    const profit = allRevenue.reduce((total, current) => total + current, 0)
    return profit
    /* ChartData.reduce((total, currentValue, currentIndex, arr) => total currentValue,0) */
  }, [ChartData])

  return (
    <Container className={className}>
      <Revenue>
        <RevenueDetails>
          <Desc>Revenue Generated</Desc>
          <RevenueTotal>${revenue}</RevenueTotal>
        </RevenueDetails>
        <Button>
          <FileDownloadIcon sx={{ fontSize: 30, color: '#82ca9d' }} />
        </Button>
      </Revenue>
      <StyledResponsiveContainer width="100%" height="100%">
        <LineChart className="lineChart" data={ChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis color="white" dataKey="name" />
          <YAxis />
          <Tooltip wrapperStyle={{ maxWidth: 200 }} />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="spent"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </StyledResponsiveContainer>
    </Container>
  )
}

const RevenueTotal = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.general.green};
  font-weight: 900;
`

const Desc = styled.p``

const RevenueDetails = styled.div``

const Revenue = styled.div`
  width: 100%;
  padding-left: 1.4em;
  display: flex;
  justify-content: space-between;
`

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  min-width: 1500px;
`

const Container = styled.div`
  padding: 1em 1.4em 1em 0em;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  min-height: 400px;
  width: 100%;
  color: white;
  overflow-x: scroll;
  background-color: ${({ theme }) => theme.background.secondary};
`
