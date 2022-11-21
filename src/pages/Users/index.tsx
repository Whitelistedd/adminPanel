import { UsersColumns, UsersRows } from 'data/Users'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DataGrid } from 'components/DataGrid'
import { useOutletContext } from 'react-router-dom'
import { useOutletContextType } from 'GlobalTypes'

export const Users: React.FC = () => {
  const [pageSize, setPageSize] = useState(15)
  const { setHeader } = useOutletContext<useOutletContextType>()

  useEffect(() => {
    setHeader({
      title: 'Users',
      desc: 'Managing The Users',
    })
  }, [])

  return (
    <Container>
      <DataGrid
        rows={UsersRows}
        columns={UsersColumns}
        pageSize={pageSize}
        onPageSizeChange={(value) => setPageSize(value)}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
      />
    </Container>
  )
}

export const Actions = styled.div`
  display: flex;
  gap: 1em;
`

const Container = styled.div`
  padding: 1em;
  height: 100%;
`
