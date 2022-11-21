import { ChartData } from 'data/GraphData'
import { RevenueGraph } from 'components/Charts'
import styled from 'styled-components'

export const LinechartPage = () => {
  return (
    <Container>
      <StyledRevenueGraph ChartData={ChartData} />
    </Container>
  )
}

const StyledRevenueGraph = styled(RevenueGraph)`
  div {
    min-width: 10px;
  }

  .lineChart {
    position: absolute !important;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 1em;
  height: 100%;
  padding: 2em;
`
