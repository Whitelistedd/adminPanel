import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import styled from 'styled-components';
import { UsersColumns, UsersRows } from '../../data';
import { DataGrid } from '@mui/x-data-grid';

const ActionsColumn = [
  {
    field: 'actions',
    headerName: 'actions',
    width: 300,
    renderCell: () => {
        return (
          <Actions>
            <ViewButton>View</ViewButton>
            <DeleteButton>Delete</DeleteButton>
          </Actions>
        )
    }
  }
]

export const Users : React.FC = () => {
  return (
    <Layout>
      <Container>
      <DataGrid
        rows={UsersRows}
        columns={UsersColumns.concat(ActionsColumn)}
        pageSize={15}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      </Container>
    </Layout>
  )
}

const ViewButton = styled.button`
  background: transparent;
  padding: 0.5em 1em;
  border: 1px solid black;
  border-radius: 10px;
  transition: 200ms ease;
  &:hover {
    cursor: pointer;
    background-color: #00000029;
  }
`

const DeleteButton = styled(ViewButton)`
  border: 1px solid red;
  color: red;
`

const Actions = styled.div`
  display: flex;
  gap: 1em;
`

const Container = styled.div`
  padding: 1em;
  height: 100%;
`
