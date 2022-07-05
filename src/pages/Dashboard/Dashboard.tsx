
import React from 'react'
import styled from 'styled-components'
import { DataTable } from '../../components/DataTable/DataTable'
import { Layout } from '../../components/Layout/Layout'
import { RevenueGraph } from '../../components/RevenueGraph/RevenueGraph'
import { RevenueWidget } from '../../components/RevenueWidget/RevenueWidget'
import { SmallWidget } from '../../components/SmallWidget/SmallWidget'
import { SmallWidgets, TransactionRows } from '../../data'
import { ChartData } from '../../data';

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
`

const SmallWidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const DashboardData = styled.div`
  height: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`
