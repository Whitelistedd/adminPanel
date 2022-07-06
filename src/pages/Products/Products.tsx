import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../components/Layout/Layout'
import { ProductCols, ProductsRows, UsersColumns, UsersRows } from '../../data/ChartsData'

const ActionsColumn = [
    {
      field: 'actions',
      headerName: 'actions',
      width: 300,
      renderCell: () => {
          return (
            <Actions>
              <DeleteButton>Delete</DeleteButton>
            </Actions>
          )
      }
    }
  ]

export const Products : React.FC = () => {
  return (
    <Layout>
        <Container>
          <DataGrid
            rows={ProductsRows}
            columns={ProductCols.concat(ActionsColumn)}
            pageSize={15}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Container>
    </Layout>
  )
}

const DeleteButton = styled.button`
  border: 1px solid red;
  color: red;
  background: transparent;
  padding: 0.5em 1em;
  border-radius: 10px;
  transition: 200ms ease;
  &:hover {
    cursor: pointer;
    background-color: #00000029;
  }
`

const Actions = styled.div`
  display: flex;
  gap: 1em;
`

const Container = styled.div`
  padding: 1em;
  height: 100%;
`