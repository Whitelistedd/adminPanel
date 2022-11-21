import { BarChart } from 'components/Charts'
import { ChartData } from 'data/GraphData'
import { RadarCharts } from 'components/Charts'
import React, { useEffect } from 'react'
import { RegionalData } from 'data/RadialData'
import { RevenueGraph } from 'components/Charts'
import { RevenueWidget } from 'components/Charts'
import { SalesQuantity } from 'data/SalesQuantity'
import { SmallWidget } from 'components/Charts'
import { SmallWidgets } from 'data/NavigationData'
import { Transactions } from 'components/Charts'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'
import { useOutletContext } from 'react-router-dom'
import { useOutletContextType } from 'GlobalTypes'

export const Dashboard: React.FC = () => {
  const { setHeader } = useOutletContext<useOutletContextType>()

  useEffect(() => {
    setHeader({
      title: 'Dashboard',
      desc: 'Welcome to your dashboard',
    })
  }, [])

  return (
    <DashboardData>
      <SmallWidgetContainer>
        {SmallWidgets.map((widgetInfo) => (
          <SmallWidget
            PercentageNum="22"
            TotalNum={widgetInfo.Stat}
            title={widgetInfo.title}
            icon={widgetInfo.icon}
          />
        ))}
      </SmallWidgetContainer>
      <RevenueContainer>
        <StyledRevenueGraph ChartData={ChartData} />
        <StyledTransactions />
      </RevenueContainer>
      <Charts>
        <RevenueWidget />
        <BarChart data={SalesQuantity} />
        <RadarCharts data={RegionalData} />
      </Charts>
    </DashboardData>
  )
}

const StyledRevenueGraph = styled(RevenueGraph)`
  max-height: 400px;
`

const StyledTransactions = styled(Transactions)`
  max-height: 400px !important;
`

const RevenueContainer = styled.div`
  display: grid;
  grid-template-columns: 2.2fr 1fr;
  height: 400px;
  gap: 1em;
  align-items: center;

  @media only screen and (max-width: 1155px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
  }
`

const Charts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;

  @media only screen and (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    div {
      min-width: 100px;
    }
  }
`

const SmallWidgetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;

  @media only screen and (max-width: 1211px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 797px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const DashboardData = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media only screen and (max-width: ${devices.Tablet}) {
    ${RevenueContainer} {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: ${devices.mobile}) {
    padding: 1em;
  }
`
