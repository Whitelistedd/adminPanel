import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { TransactionRows } from '../../data'
import { DataTableProps } from '../../types'

export const DataTable : React.FC<DataTableProps> = ({rows, columns}) => {
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
          {
            TransactionRows.map(row =>
            <TableRow>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>₽{row.amount}</TableCell>
              <TableCell>
                <Status status={row.status} >{row.status}</Status>
              </TableCell>
            </TableRow>  
            )
          }
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

const Status = styled.span<{status: string}>`
  color: ${props => props.status === "Approved" ? "green" : props.status === "Pending" ? "orange" : props.status === "Declined" ? "#ee3030" : "transparent"} !important;
  background-color: ${props => props.status === "Approved" ? "#DAEADA" : props.status === "Pending" ? "#ebde94" : props.status === "Declined" ? "#d38e8e" : "transparent"};
  padding: 0.5em;
  border-radius: 10px;
`

const StyledTableContainer = styled(TableContainer)`
  height: 100%;
`
