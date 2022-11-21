import { BarChart } from 'components/Charts'
import { SalesQuantity } from 'data/SalesQuantity'
import styled from 'styled-components'

export const BarchartPage = () => {
  return (
    <Container>
      <BarChart data={SalesQuantity} />
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
