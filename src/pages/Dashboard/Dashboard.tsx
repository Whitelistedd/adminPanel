
import React from 'react'
import styled from 'styled-components'

import { DataTable } from '../../components/DataTable/DataTable'
import { Layout } from '../../components/Layout/Layout'
import { RevenueGraph } from '../../components/RevenueGraph/RevenueGraph'
import { RevenueWidget } from '../../components/RevenueWidget/RevenueWidget'
import { SmallWidget } from '../../components/SmallWidget/SmallWidget'
import { SmallWidgets } from '../../data/componentsData'
import { ChartData, TransactionRows } from '../../data/ChartsData';
import { devices } from '../../MediaQueries'

export const Dashboard : React.FC = () => {
  return (
    <Layout>
      <DashboardData>
        <SmallWidgetContainer>
          {
            SmallWidgets.map(widgetInfo => 
              <SmallWidget isCurrency={widgetInfo.isCurrency} PercentageNum='22' TotalNum={widgetInfo.Stat} title={widgetInfo.title} Link={widgetInfo.PageLink} icon={widgetInfo.icon}  />  
            )
          }
        </SmallWidgetContainer>
        <RevenueContainer>
          <RevenueWidget />
          <RevenueGraph ChartData={ChartData} />
        </RevenueContainer>
        <DataTable rows={TransactionRows} />
      </DashboardData>
    </Layout>
  )
}

const RevenueContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 1em;
  align-items: center;
`

const SmallWidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1em;
`

const DashboardData = styled.div`
  height: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media only screen and (max-width: ${devices.Tablet}) {
    ${RevenueContainer} {
      flex-direction: column;
    }
  }
`
