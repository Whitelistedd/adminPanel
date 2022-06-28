
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
        PageLink: "See all users",
        icon: <AccountBoxIcon />,
    },
    {
        title: "ORDERS",
        PageLink: "View all orders",
        icon: <ShoppingCartOutlinedIcon />,
    },
    {
        title: "EARNINGS",
        PageLink: "View net earnings",
        icon: <PaidOutlinedIcon />,
    },
    {
        title: "MY BALANCE",
        PageLink: "See details",
        icon: <AccountBalanceWalletOutlinedIcon />,
    },
]