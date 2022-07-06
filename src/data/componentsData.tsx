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
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import { LeftNavListType } from "../types";

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

export const StatsList : string[] = [
    "Target",
    "Last Week",
    "Last Month",
]