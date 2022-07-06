import { GridColDef } from "@mui/x-data-grid";

import { ChartDataType, TransactionRowsType } from "../types";

export const ChartData : ChartDataType = [{ name: 'Jan', uv: 600, }, { name: 'Feb', uv: 500, }, { name: 'March', uv: 450, }, { name: 'April', uv: 400, }, { name: 'May', uv : 600, }, { name: 'June', uv : 700, }, { name: 'July', uv : 400, }, { name: 'August', uv : 500, }, { name: 'September', uv : 600, }, { name: 'October', uv : 500, }, { name: 'November', uv : 300, }, { name: 'December', uv : 600, }]

export const TransactionRows : TransactionRowsType = [
    { id: 62334568324, product: 'Cedar Slim Lightweight Shirt', name: 'Jon', date: "15/6/2022", amount: 2000, status: 'Approved'},
    { id: 35645645364, product: 'Specialist Striped Linen', name: 'Cersei', date: "15/6/2022", amount: 2000, status: 'Declined' },
    { id: 24564256445, product: 'Cedar Slim Lightweight Shirt', name: 'Jaime', date: "15/6/2022", amount: 2000, status: 'Approved' },
    { id: 23423523511, product: 'Crane Plain Cotton-Silk Polo Shirt', name: 'Arya', date: "15/6/2022", amount: 2000, status: 'Pending' },
    { id: 12385679567, product: 'Byron Cotton-Stretch Shorts', name: 'Daenerys', date: "15/6/2022", amount: 2000, status: 'Declined' },
    { id: 59036546944, product: 'Byron Cotton-Stretch Shorts', name: 'Max', date: "15/6/2022", amount: 2000, status: 'Approved' },
    { id: 47458934357, product: 'Wood Organic Cotton Hoodie', name: 'Ferrara', date: "15/6/2022", amount: 2000, status: 'Pending' },
    { id: 36289867567, product: 'Specialist Striped Linen', name: 'Rossini', date: "15/6/2022", amount: 2000, status: 'Approved' },
    { id: 36399647356, product: 'Specialist Striped Linen', name: 'Harvey', date: "15/6/2022", amount: 2000, status: 'Pending' },
];

export const UsersColumns : GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 90
    },
    {
      field: 'username',
      headerName: 'User',
      width: 250
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 450
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 250
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 250
    },
];

export const UsersRows = [
    { id: 1, username: 'Snow', email: 'Jon@gmail.com' , age: 35, status: "active", },
    { id: 2, username: 'Lannister', email: 'Cersei@gmail.com', age: 42, status: "inactive",  },
    { id: 3, username: 'Lannister', email: 'Jaime@gmail.com', age: 45, status: "pending",  },
    { id: 4, username: 'Stark', email: 'Arya@gmail.com', age: 16, status: "active",  },
    { id: 5, username: 'Targaryen', email: 'Daenerys@gmail.com', age: 22, status: "inactive",  },
    { id: 6, username: 'Melisandre', email: 'Melisandre@gmail.com', age: 150, status: "pending",  },
    { id: 7, username: 'Clifford', email: 'Ferrara@gmail.com', age: 44, status: "pending",  },
    { id: 8, username: 'Frances', email: 'Rossini@gmail.com', age: 36, status: "inactive",  },
    { id: 9, username: 'Roxie', email: 'Harvey@gmail.com', age: 65, status: "inactive",  },
];

export const ProductCols : GridColDef[] = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 90
    },
    {
        field: 'product',
        headerName: 'Product',
        width: 250
    },
    {
        field: 'sizes',
        headerName: 'Sizes',
        width: 450
    },
    {
        field: 'colors',
        headerName: 'Colors',
        width: 250
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 250
    },
]

export const ProductsRows = [
    { id: 1, product: 'Cedar Slim Lightweight Shirt', sizes: ['M','L','XL'], colors: 'White',price: 3000},
    { id: 2, product: 'Specialist Striped Linen', sizes: ['S','M','L'], colors: 'Blue',price: 2500},
    { id: 3, product: 'Byron Cotton-Stretch Shorts', sizes: ['S','L','XXL'], colors: 'Blue',price: 2000},
    { id: 4, product: 'Wood Organic Cotton Hoodie', sizes: ['M','L','XXL'], colors: 'Black',price: 3400},
    { id: 5, product: 'Crane Plain Cotton-Silk Polo Shirt', sizes: ['S','L','XXL'], colors: 'Green',price: 1700},
    { id: 6, product: 'Moon Swing Hoodie', sizes: ['S','L','XXL'], colors: 'Breen',price: 2300},
]