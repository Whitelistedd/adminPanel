
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { LeftNavListType } from './types';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { GridColDef,GridValueGetterParams } from '@mui/x-data-grid';

export const LeftNavigationLists : LeftNavListType = [
    {
        listName: "MAIN",
        NavLocations: [
            {
                title: "Dashboard",
                icon: <DashboardIcon />,
            },
        ],
    },
    {
        listName: "LISTS",
        NavLocations: [
            {
                title: "Users",
                icon: <PersonOutlineIcon />,
            },
            {
                title: "Products",
                icon: <ShoppingBagIcon />,
            },
            {
                title: "Orders",
                icon: <CreditCardIcon />,
            },
            {
                title: "Delivery",
                icon: <LocalShippingIcon />,
            },
        ],
    },
    {
        listName: "USEFUL",
        NavLocations: [
            {
                title: "Stats",
                icon: <AssessmentIcon />,
            },
            {
                title: "Notifications",
                icon: <NotificationsNoneOutlinedIcon />,
            },
        ],
    },
    {
        listName: "SERVICE",
        NavLocations: [
            {
                title: "System Health",
                icon: <SettingsApplicationsIcon />,
            },
            {
                title: "Logs",
                icon: <SettingsApplicationsIcon />,
            },
            {
                title: "Settings",
                icon: <SettingsApplicationsIcon />,
            },
        ],
    },
    {
        listName: "SERVICE",
        NavLocations: [
            {
                title: "Profile",
                icon: <LogoutIcon />,
            },
            {
                title: "Logout",
                icon: <LogoutIcon />,
            },
        ],
    },
]

export const SmallWidgets = [
    {
        title: "USERS",
        isCurrency: false,
        PageLink: "See all users",
        Stat: "200",
        icon: <AccountBoxIcon sx={{color: "#BD4152"}} />,
    },
    {
        title: "ORDERS",
        isCurrency: false,
        PageLink: "View all orders",
        Stat: "5,000",
        icon: <ShoppingCartOutlinedIcon sx={{color: "orange"}} />,
    },
    {
        title: "EARNINGS",
        isCurrency: true,
        PageLink: "View net earnings",
        Stat: "12,000",
        icon: <PaidOutlinedIcon sx={{color: "green"}} />,
    },
    {
        title: "MY BALANCE",
        isCurrency: true,
        PageLink: "See details",
        Stat: "100,000",
        icon: <AccountBalanceWalletOutlinedIcon sx={{color: "purple"}} />,
    },
]

export const StatsList = [
    "Target",
    "Last Week",
    "Last Month",
]

export const ChartData = [{ name: 'Jan', uv: 600, }, { name: 'Feb', uv: 500, }, { name: 'March', uv: 450, }, { name: 'April', uv: 400, }, { name: 'May', uv : 600, }, { name: 'June', uv : 700, }, { name: 'July', uv : 400, }, { name: 'August', uv : 500, }, { name: 'September', uv : 600, }, { name: 'October', uv : 500, }, { name: 'November', uv : 300, }, { name: 'December', uv : 600, }]

export const TransactionColumns: GridColDef[] = [
    { 
      field: 'id', 
      headerName: 'Transaction ID', 
      width: 250
    },
    {
      field: 'product',
      headerName: 'Product',
      width: 250
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 250
    },
    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      width: 250
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 250
    },
];

export const TransactionRows = [
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