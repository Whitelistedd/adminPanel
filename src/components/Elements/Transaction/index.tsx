import { Button } from '@mui/material'
import styled from 'styled-components'

interface TransactionProps {
  id: number
  name: string
  date: string
  price: number
}

export const Transaction: React.FC<TransactionProps> = ({
  id,
  name,
  date,
  price,
}) => {
  return (
    <Container>
      <Details>
        <DetailId>{id}</DetailId>
        <Detail>{name}</Detail>
      </Details>
      <Date>{date}</Date>
      <StyledButton variant="contained">₽{price}</StyledButton>
    </Container>
  )
}

const Date = styled.p``

const Detail = styled.p``

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.general.green} !important;
`

const DetailId = styled(Detail)`
  color: ${({ theme }) => theme.general.green};
`

const Details = styled.div``

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  font-size: 0.9rem;
  color: white;
  background: ${({ theme }) => theme.background.secondary};
`
