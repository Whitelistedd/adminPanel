import * as React from 'react'

import { CSSObject, Theme, styled } from '@mui/material/styles'

import { Box } from '@mui/system'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { LeftNavigationLists } from 'data/NavigationData'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MuiDrawer from '@mui/material/Drawer'

export type LeftNavListType = Array<{
  listName: string
  NavLocations: {
    title: string
    icon: string
  }[]
}>

export const LeftNav = () => {
  const [open, setOpen] = React.useState(false)

  const handleDrawerClose = () => {
    setOpen((prev) => (prev ? false : true))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {open ? (
              <ChevronLeftIcon sx={{ color: 'white' }} />
            ) : (
              <ChevronRightIcon sx={{ color: 'white' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {LeftNavigationLists.map((list) => (
          <List sx={{ pl: open ? '30px' : '0px' }}>
            <ListItemText
              primary={list.listName}
              sx={{
                span: {
                  fontSize: 12,
                  opacity: 0.6,
                  textAlign: open ? 'left' : 'center',
                },
              }}
            />

            {list.NavLocations.map((item) => (
              <Link
                to={`/${
                  item.route
                    ? item.route
                    : item.title === 'Dashboard'
                    ? ''
                    : item.title
                }`}
              >
                <ListItem
                  key={item.title}
                  disablePadding
                  sx={{ display: 'block' }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      alignItems: open ? 'center' : 'initial',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: 'white',
                        minWidth: 0,
                        mr: open ? 3 : 'unset',
                        justifyContent: 'center',
                        svg: {
                          fontSize: 20,
                        },
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    {open && (
                      <ListItemText
                        primary={item.title}
                        sx={{ opacity: open ? 1 : 0, span: { fontSize: 13 } }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        ))}
      </Drawer>
    </Box>
  )
}

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  backgroundColor: '#1B2536',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': {
      ...openedMixin(theme),
      backgroundColor: '#1B2536',
      color: 'white',
      fontSize: 10,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': {
      ...closedMixin(theme),
      backgroundColor: '#1B2536',
      color: 'white',
    },
  }),
}))
