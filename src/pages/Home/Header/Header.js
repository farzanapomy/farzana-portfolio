import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Drawer, ListItemText, useTheme } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Header = () => {
  React.useEffect(() => {
    AOS.init();
  }, [])

  const theme = useTheme();
  const useStyle = makeStyles({
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important'
      },
      navLogo: {
        [theme.breakpoints.down('sm')]: {
          display: 'none '
        },
      },

    }
  })

  const { navItem, navIcon, navLogo } = useStyle();
  const [state, setState] = React.useState(false);



  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>

        <ListItem button >
          <ListItemText>
            <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/home'>Home</Link>
          </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>
            <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/projects'>Projects</Link>
          </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>
            <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/contactMe'>Contact Me</Link>
          </ListItemText>
        </ListItem>
        <ListItem button >
          <ListItemText>
            <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/about'>About me </Link>
          </ListItemText>
        </ListItem>

      </List>
      <Divider />

    </Box>
  );


  return (
    <div data-aos="zoom-out-down" sx={{ m: 0 }}>
      <AppBar position="static" sx={{ flexGrow: 1, backgroundColor: 'black', mb: 2 }} >
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

          <Link className={navItem} to='/home' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, marginRight: 90 }}>
              Farzana Pomy
            </Typography>
          </Link>



          <Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>

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
    </div>
  );
}

export default Header;