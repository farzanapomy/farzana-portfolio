import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Drawer, useTheme } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Header = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: 'white',
      textDecoration: 'none'
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      },
      navLogo: {
        [theme.breakpoints.down('sm')]: {
          display: 'none !important'
        }
      },
      smallNavItem: {
        color: 'white ',
        textDecoration: 'none '
      },
    }
  })

  const { navItem, navIcon, navLogo, smallNavItem } = useStyle();
  const [state, setState] = React.useState(false);



  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"

    >
      <List>

        <ListItem button >
          <ListItemText>
            <Link className={smallNavItem} to='/home'>Home</Link>
          </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>
            <Link className={smallNavItem} to='/projects'>Projects</Link>
          </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>
            <Link className={smallNavItem} to='/contactMe'>Contact Me</Link>
          </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>
            <Link className={smallNavItem} to='/about'>About me </Link>
          </ListItemText>
        </ListItem>

      </List>
      <Divider />

    </Box>
  );


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Farzana Pomy
            </Typography>
            <Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                <Link className={navItem} to='/home' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                  Home
                </Link>
                <Link className={navItem} to='/projects' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                  My Project
                </Link>

                <Link className={navItem} to='/ContactMe' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                  Contact Me
                </Link>
                <Link className={navItem} to='/blogs' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                  Blogs
                </Link>
                <Link className={navItem} to='about' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                  About
                </Link>
              </Box>
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
      <div>

        <React.Fragment >
          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>

      </div>
    </>
  );
}

export default Header;