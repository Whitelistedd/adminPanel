import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BarChartIcon from '@mui/icons-material/BarChart'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Mail from '@mui/icons-material/Mail'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import RadarIcon from '@mui/icons-material/Radar'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrafficIcon from '@mui/icons-material/Traffic'

export const LeftNavigationLists = [
  {
    listName: '',
    NavLocations: [
      {
        title: 'Dashboard',
        icon: <DashboardIcon />,
      },
    ],
  },
  {
    listName: 'DATA',
    NavLocations: [
      {
        title: 'Users',
        icon: <PersonOutlineIcon />,
      },
      {
        title: 'Products',
        icon: <ShoppingBagIcon />,
      },
      {
        title: 'Orders',
        icon: <CreditCardIcon />,
      },
    ],
  },
  {
    listName: 'PAGES',
    NavLocations: [
      {
        title: 'Create User',
        route: 'form',
        icon: <AccountCircleIcon />,
      },
      {
        title: 'Calendar',
        icon: <CalendarTodayIcon />,
      },
    ],
  },
  {
    listName: 'Charts',
    NavLocations: [
      {
        title: 'Bar Chart',
        icon: <BarChartIcon />,
        route: 'BarChart',
      },
      {
        title: 'Radar Chart',
        icon: <RadarIcon />,
        route: 'RadarChart',
      },
      {
        title: 'Line Chart',
        icon: <TimelineIcon />,
        route: 'LineChart',
      },
    ],
  },
]

export const SmallWidgets = [
  {
    title: 'Emails Sent',
    Stat: '12,361',
    icon: <Mail />,
  },
  {
    title: 'ORDERS',
    Stat: '5,000',
    icon: <PointOfSaleIcon />,
  },
  {
    title: 'EARNINGS',
    Stat: '12,000',
    icon: <PersonAddIcon />,
  },
  {
    title: 'MY BALANCE',
    Stat: '100,000',
    icon: <TrafficIcon />,
  },
]

export const StatsList: string[] = ['Target', 'Last Week', 'Last Month']
