import React, { useState } from 'react'
import { TransactionCol, TransactionRows } from 'data/Transactions'
import styled from 'styled-components'
import { DataGrid } from 'components/DataGrid'

export const Orders: React.FC = () => {
  const [pageSize, setPageSize] = useState(15)

  return (
    <Container>
      <DataGrid
        columns={TransactionCol}
        rows={TransactionRows}
        pageSize={pageSize}
        checkboxSelection
        onPageSizeChange={(value) => setPageSize(value)}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Container>
  )
}

const Container = styled.div`
  padding: 1em;
  height: 100%;
`
