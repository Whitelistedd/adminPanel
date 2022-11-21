import { Transaction } from '../../Elements/index'
import { TransactionRows } from 'data/Transactions'
import styled from 'styled-components'

interface TransactionsProps {
  className?: string
}

export const Transactions: React.FC<TransactionsProps> = ({ className }) => {
  return (
    <Container className={className}>
      <Wrap>
        <Header>Recent Transactions</Header>
        {TransactionRows.map((row) => (
          <Transaction
            id={row.id}
            date={row.date}
            name={row.name}
            price={row.amount}
          />
        ))}
      </Wrap>
    </Container>
  )
}

const Header = styled.div`
  padding: 1em;
  font-size: 1rem;
  color: white;
  background: ${({ theme }) => theme.background.secondary};
`

const Wrap = styled.div`
  display: flex;
  gap: 0.5em;
  width: 100%;
  flex-direction: column;
`

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  min-height: 400px;
`
