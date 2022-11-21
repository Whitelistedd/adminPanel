import styled from 'styled-components'
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid'

export const DataGrid = styled(MuiDataGrid)`
  font-size: 14px !important;
  background-color: ${({ theme }) => theme.background.secondary};

  * {
    color: white !important;
  }

  & .MuiDataGrid-columnHeaders {
    background-color: ${({ theme }) => theme.general.purple} !important;
    * {
      color: white !important;
    }
  }

  & .MuiDataGrid-footerContainer {
    background-color: ${({ theme }) => theme.general.purple} !important;
    * {
      color: white !important;
    }
  }
`
