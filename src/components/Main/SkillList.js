import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import NewsFeed from '../../assets/images/newsfeed.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relaive',
    color: 'white'
    // backgroundColor: theme.palette.background.paper,
  },
  contents:{
    display:'flex',
    flexDirection:'row',
    position:'relative',
  },
}));

export default function SkillList() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div>
        <Typography variant='h3' component='span'>Skill&Work</Typography>
      </div>
      <div className={classes.contents}>
        <div>
          <Typography>Android App: NewsFeed App</Typography>
        </div>
        <div style={{position:'absolute',right:'30%'}}>
          <img src={NewsFeed} alt='newsfeed' height={500} />
        </div>
      </div>
    </div>

  );
}