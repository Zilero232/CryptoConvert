import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Toolbar, List, Typography, Divider, IconButton, Badge, Container } from '@mui/material'
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, Notifications as NotificationsIcon } from '@mui/icons-material'

import MainListItems from '../components/UI/ListItems';
import { Drawer, AppBar } from '../components/UI/Drawer'

import Orders from '../components/UI/Orders';
import Reviews from '../components/UI/Reviews';
import Curs from '../components/UI/Curs';
import Language from '../components/UI/Language';

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const [activeList, setActiveList] = React.useState(0)
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const changeBlockProfile = () => {
    switch (activeList) {
      case 0:
        return <Orders />
      case 1:
        return <Reviews />
      case 2:
        return <Curs />
      case 3:
        return <Language />
      default:
        return <Orders />
    }
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px'
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Профиль
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems id={activeList} change={setActiveList} />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {changeBlockProfile()}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}