import { GridColDef } from '@mui/x-data-grid'
import { Actions, StyledTableButton, DeleteTableButton } from 'pages/Products'

export const ProductsRows = [
  {
    id: 1,
    product: 'Cedar Slim Lightweight Shirt',
    sizes: ['M', 'L', 'XL'],
    colors: 'White',
    price: 3000,
  },
  {
    id: 2,
    product: 'Specialist Striped Linen',
    sizes: ['S', 'M', 'L'],
    colors: 'Blue',
    price: 2500,
  },
  {
    id: 3,
    product: 'Byron Cotton-Stretch Shorts',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Blue',
    price: 2000,
  },
  {
    id: 4,
    product: 'Wood Organic Cotton Hoodie',
    sizes: ['M', 'L', 'XXL'],
    colors: 'Black',
    price: 3400,
  },
  {
    id: 5,
    product: 'Crane Plain Cotton-Silk Polo Shirt',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Green',
    price: 1700,
  },
  {
    id: 6,
    product: 'Moon Swing Hoodie',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Breen',
    price: 2300,
  },
  {
    id: 7,
    product: 'Cedar Slim Lightweight Shirt',
    sizes: ['M', 'L', 'XL'],
    colors: 'White',
    price: 3000,
  },
  {
    id: 8,
    product: 'Specialist Striped Linen',
    sizes: ['S', 'M', 'L'],
    colors: 'Blue',
    price: 2500,
  },
  {
    id: 9,
    product: 'Byron Cotton-Stretch Shorts',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Blue',
    price: 2000,
  },
  {
    id: 10,
    product: 'Wood Organic Cotton Hoodie',
    sizes: ['M', 'L', 'XXL'],
    colors: 'Black',
    price: 3400,
  },
  {
    id: 11,
    product: 'Crane Plain Cotton-Silk Polo Shirt',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Green',
    price: 1700,
  },
  {
    id: 12,
    product: 'Moon Swing Hoodie',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Breen',
    price: 2300,
  },
  {
    id: 13,
    product: 'Cedar Slim Lightweight Shirt',
    sizes: ['M', 'L', 'XL'],
    colors: 'White',
    price: 3000,
  },
  {
    id: 14,
    product: 'Specialist Striped Linen',
    sizes: ['S', 'M', 'L'],
    colors: 'Blue',
    price: 2500,
  },
  {
    id: 15,
    product: 'Byron Cotton-Stretch Shorts',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Blue',
    price: 2000,
  },
  {
    id: 16,
    product: 'Wood Organic Cotton Hoodie',
    sizes: ['M', 'L', 'XXL'],
    colors: 'Black',
    price: 3400,
  },
  {
    id: 17,
    product: 'Crane Plain Cotton-Silk Polo Shirt',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Green',
    price: 1700,
  },
  {
    id: 18,
    product: 'Moon Swing Hoodie',
    sizes: ['S', 'L', 'XXL'],
    colors: 'Breen',
    price: 2300,
  },
]

export const ProductCols: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'product',
    headerName: 'Product',
    flex: 1,
  },
  {
    field: 'sizes',
    headerName: 'Sizes',
    flex: 1,
  },
  {
    field: 'colors',
    headerName: 'Colors',
    flex: 1,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 250,
  },
  {
    field: 'actions',
    headerName: 'actions',
    width: 300,
    renderCell: () => {
      return (
        <Actions>
          <StyledTableButton>EDIT</StyledTableButton>
          <DeleteTableButton>Delete</DeleteTableButton>
        </Actions>
      )
    },
  },
]
