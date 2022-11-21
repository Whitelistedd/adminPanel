import { GridColDef } from '@mui/x-data-grid'

export type TransactionRowsType = Array<{
  id: number
  product: string
  name: string
  date: string
  amount: number
  status: string
}>

export const TransactionRows: TransactionRowsType = [
  {
    id: 62334568324,
    product: 'Cedar Slim Lightweight Shirt',
    name: 'Jon',
    date: '15/6/2022',
    amount: 2000,
    status: 'Approved',
  },
  {
    id: 35645645364,
    product: 'Specialist Striped Linen',
    name: 'Cersei',
    date: '15/6/2022',
    amount: 2000,
    status: 'Declined',
  },
  {
    id: 24564256445,
    product: 'Cedar Slim Lightweight Shirt',
    name: 'Jaime',
    date: '15/6/2022',
    amount: 2000,
    status: 'Approved',
  },
  {
    id: 23423523511,
    product: 'Crane Plain Cotton-Silk Polo Shirt',
    name: 'Arya',
    date: '15/6/2022',
    amount: 2000,
    status: 'Pending',
  },
  {
    id: 12385679567,
    product: 'Byron Cotton-Stretch Shorts',
    name: 'Daenerys',
    date: '15/6/2022',
    amount: 2000,
    status: 'Declined',
  },
  {
    id: 59036546944,
    product: 'Byron Cotton-Stretch Shorts',
    name: 'Max',
    date: '15/6/2022',
    amount: 2000,
    status: 'Approved',
  },
  {
    id: 47458934357,
    product: 'Wood Organic Cotton Hoodie',
    name: 'Ferrara',
    date: '15/6/2022',
    amount: 2000,
    status: 'Pending',
  },
  {
    id: 36289867567,
    product: 'Specialist Striped Linen',
    name: 'Rossini',
    date: '15/6/2022',
    amount: 2000,
    status: 'Approved',
  },
  {
    id: 36399647356,
    product: 'Specialist Striped Linen',
    name: 'Harvey',
    date: '15/6/2022',
    amount: 2000,
    status: 'Pending',
  },
]

export const TransactionCol: GridColDef[] = [
  {
    field: 'id',
    headerName: 'TrackingID',
    flex: 1,
  },
  {
    field: 'product',
    headerName: 'Product',
    flex: 1,
  },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
  },
  {
    field: 'date',
    headerName: 'Date',
    flex: 1,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
  },
]
