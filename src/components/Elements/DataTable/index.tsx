import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import React from 'react'
import styled from 'styled-components'

export interface DataTableProps {
  rows: Array<{
    id: number
    product: string
    name: string
    date: string
    amount: number
    status: string
  }>
}

export const DataTable: React.FC<DataTableProps> = ({ rows }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>TrackingID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>₽{row.amount}</TableCell>
              <TableCell>
                <Status status={row.status}>{row.status}</Status>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

const Status = styled.span<{ status: string }>`
  color: ${(props) =>
    props.status === 'Approved'
      ? 'green'
      : props.status === 'Pending'
      ? 'orange'
      : props.status === 'Declined'
      ? '#ee3030'
      : 'transparent'} !important;
  background-color: ${(props) =>
    props.status === 'Approved'
      ? '#DAEADA'
      : props.status === 'Pending'
      ? '#ebde94'
      : props.status === 'Declined'
      ? '#d38e8e'
      : 'transparent'};
  padding: 0.5em;
  border-radius: 10px;
`

const StyledTableContainer = styled(TableContainer)`
  height: 100%;
  border: 1px solid #e0e0e0;

  th {
    min-width: 150px;
    width: 100%;
    font-size: 0.9rem;
  }

  td {
    font-size: 0.9rem;
  }
`
