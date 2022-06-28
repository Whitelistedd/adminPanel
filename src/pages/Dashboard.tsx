
import React from 'react'
import styled from 'styled-components'
import { LeftNav } from '../components/LeftNav/LeftNav'
import { Navbar } from '../components/Navbar/Navbar'
import { SmallWidget } from '../components/SmallWidget/SmallWidget'
import { SmallWidgets } from '../data'

export const Dashboard : React.FC = () => {
  return (
    <Container>
      <LeftNav />
      <Wrap>
        <Navbar />
        <DashboardData>
          <SmallWidgetContainer>
            {
              SmallWidgets.map(widgetInfo => 
                <SmallWidget PercentageNum='2' TotalNum={2} title={widgetInfo.title} Link={widgetInfo.PageLink} icon={widgetInfo.icon}  />  
              )
            }
          </SmallWidgetContainer>
        </DashboardData>
      </Wrap>
    </Container>
  )
}

const SmallWidgetContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const DashboardData = styled.div`
  height: 100%;
  padding: 2em;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`
