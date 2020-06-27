import React from 'react';
import { makeStyles,Typography,Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import '../../assets/scss/AppBar.scss'
import CustomizedMenus from './Menu'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    display:'flex',
    flexDirection:'row'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color:'white',
    paddingRight:10,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*blue*/}
      {/* <AppBar position="static" style={{background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'}}> */}
      {/*red*/}
      {/* <AppBar position="static" style={{background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}> */}
      {/* <AppBar position="static" style={{ background: '#131A22' }}> */}
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
            <Link to='/'>
              <HomeIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Zhang's Portfolio Site
          </Typography>
          <Link to={ROUTES.ABOUT}>
          <Button className={classes.title} color="inherit">About</Button>
          </Link>
        {/* <CustomizedMenus/> */}

        </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}