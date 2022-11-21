import { GridColDef } from '@mui/x-data-grid'
import { Button } from 'components/Elements'
import { Actions } from 'pages/Users'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import SecurityIcon from '@mui/icons-material/Security'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

export const UsersColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    flex: 1,
  },
  {
    field: 'username',
    headerName: 'User',
    flex: 1,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'status',
    flex: 1,
  },
  {
    field: 'Access_Level',
    headerName: 'Access Level',
    width: 300,
    renderCell: (params) => {
      const { value } = params
      return (
        <Actions>
          <Button
            icon={
              value === 'admin' ? (
                <AdminPanelSettingsIcon />
              ) : value === 'manager' ? (
                <SecurityIcon />
              ) : (
                <LockOpenIcon />
              )
            }
          >
            <span>{value}</span>
          </Button>
        </Actions>
      )
    },
  },
]

export const UsersRows = [
  {
    id: 1,
    username: 'Snow',
    email: 'Jon@gmail.com',
    age: 35,
    status: 'active',
    Access_Level: 'user',
  },
  {
    id: 2,
    username: 'Lannister',
    email: 'Cersei@gmail.com',
    age: 42,
    status: 'inactive',
    Access_Level: 'admin',
  },
  {
    id: 3,
    username: 'Lannister',
    email: 'Jaime@gmail.com',
    age: 45,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 4,
    username: 'Stark',
    email: 'Arya@gmail.com',
    age: 16,
    status: 'active',
    Access_Level: 'admin',
  },
  {
    id: 5,
    username: 'Targaryen',
    email: 'Daenerys@gmail.com',
    age: 22,
    status: 'inactive',
    Access_Level: 'admin',
  },
  {
    id: 6,
    username: 'Melisandre',
    email: 'Melisandre@gmail.com',
    age: 150,
    status: 'pending',
    Access_Level: 'admin',
  },
  {
    id: 7,
    username: 'Clifford',
    email: 'Ferrara@gmail.com',
    age: 44,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 8,
    username: 'Frances',
    email: 'Rossini@gmail.com',
    age: 36,
    status: 'inactive',
    Access_Level: 'manager',
  },
  {
    id: 9,
    username: 'Roxie',
    email: 'Harvey@gmail.com',
    age: 65,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 10,
    username: 'Snow',
    email: 'Jon@gmail.com',
    age: 35,
    status: 'active',
    Access_Level: 'manager',
  },
  {
    id: 11,
    username: 'Lannister',
    email: 'Cersei@gmail.com',
    age: 42,
    status: 'inactive',
    Access_Level: 'manager',
  },
  {
    id: 12,
    username: 'Lannister',
    email: 'Jaime@gmail.com',
    age: 45,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 13,
    username: 'Stark',
    email: 'Arya@gmail.com',
    age: 16,
    status: 'active',
    Access_Level: 'user',
  },
  {
    id: 14,
    username: 'Targaryen',
    email: 'Daenerys@gmail.com',
    age: 22,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 15,
    username: 'Melisandre',
    email: 'Melisandre@gmail.com',
    age: 150,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 16,
    username: 'Clifford',
    email: 'Ferrara@gmail.com',
    age: 44,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 17,
    username: 'Frances',
    email: 'Rossini@gmail.com',
    age: 36,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 18,
    username: 'Roxie',
    email: 'Harvey@gmail.com',
    age: 65,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 19,
    username: 'Snow',
    email: 'Jon@gmail.com',
    age: 35,
    status: 'active',
    Access_Level: 'user',
  },
  {
    id: 20,
    username: 'Lannister',
    email: 'Cersei@gmail.com',
    age: 42,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 21,
    username: 'Lannister',
    email: 'Jaime@gmail.com',
    age: 45,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 22,
    username: 'Stark',
    email: 'Arya@gmail.com',
    age: 16,
    status: 'active',
    Access_Level: 'user',
  },
  {
    id: 23,
    username: 'Targaryen',
    email: 'Daenerys@gmail.com',
    age: 22,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 24,
    username: 'Melisandre',
    email: 'Melisandre@gmail.com',
    age: 150,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 25,
    username: 'Clifford',
    email: 'Ferrara@gmail.com',
    age: 44,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 26,
    username: 'Frances',
    email: 'Rossini@gmail.com',
    age: 36,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 27,
    username: 'Roxie',
    email: 'Harvey@gmail.com',
    age: 65,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 28,
    username: 'Snow',
    email: 'Jon@gmail.com',
    age: 35,
    status: 'active',
    Access_Level: 'user',
  },
  {
    id: 29,
    username: 'Lannister',
    email: 'Cersei@gmail.com',
    age: 42,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 31,
    username: 'Lannister',
    email: 'Jaime@gmail.com',
    age: 45,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 32,
    username: 'Stark',
    email: 'Arya@gmail.com',
    age: 16,
    status: 'active',
    Access_Level: 'user',
  },
  {
    id: 33,
    username: 'Targaryen',
    email: 'Daenerys@gmail.com',
    age: 22,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 34,
    username: 'Melisandre',
    email: 'Melisandre@gmail.com',
    age: 150,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 35,
    username: 'Clifford',
    email: 'Ferrara@gmail.com',
    age: 44,
    status: 'pending',
    Access_Level: 'user',
  },
  {
    id: 36,
    username: 'Frances',
    email: 'Rossini@gmail.com',
    age: 36,
    status: 'inactive',
    Access_Level: 'user',
  },
  {
    id: 37,
    username: 'Roxie',
    email: 'Harvey@gmail.com',
    age: 65,
    status: 'inactive',
    Access_Level: 'user',
  },
]
