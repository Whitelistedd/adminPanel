import { RadarCharts } from 'components/Charts'
import { RegionalData } from 'data/RadialData'
import styled from 'styled-components'

export const RadarchartPage = () => {
  return (
    <Container>
      <RadarCharts data={RegionalData} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 1em;
  padding: 2em;
  height: 100%;
`
