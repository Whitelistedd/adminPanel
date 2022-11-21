import { ProductCols, ProductsRows } from 'data/Products'

import React, { useEffect, useState } from 'react'
import { Button } from 'components/Elements'
import styled from 'styled-components'
import { DataGrid } from 'components/DataGrid'
import { useOutletContext } from 'react-router-dom'
import { useOutletContextType } from 'GlobalTypes'

export const Products: React.FC = () => {
  const [pageSize, setPageSize] = useState(15)
  const { setHeader } = useOutletContext<useOutletContextType>()

  useEffect(() => {
    setHeader({
      title: 'Products',
      desc: 'Managing The Products',
    })
  }, [])

  return (
    <Container>
      <DataGrid
        rows={ProductsRows}
        columns={ProductCols}
        pageSize={pageSize}
        checkboxSelection
        onPageSizeChange={(value) => setPageSize(value)}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Container>
  )
}

export const Actions = styled.div`
  display: flex;
  gap: 1em;
`

export const StyledTableButton = styled(Button)`
  min-width: 90px !important;
`

export const DeleteTableButton = styled(StyledTableButton)`
  background: red !important;
`

const Container = styled.div`
  padding: 1em;
  height: 100%;
`
