import React from 'react';
import { makeStyles, Typography, createMuiTheme, ThemeProvider,responsiveFontSizes } from '@material-ui/core';
import NewsFeed from '../../assets/images/newsfeed.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: 'white'
    // backgroundColor: theme.palette.background.paper,
  },
  contents: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    minHeight: 600
  },
}));

const theme = createMuiTheme();
theme.typography.h6={
  fontSize:'1rem'
}

export default function ProfileList() {
  const classes = useStyles();
  const messages = 'An Android News Feed app which gives a user regularly updated news from the Guardian News.'
    + 'App fetch the new from Guardian API related to user interest.'
    + 'As fetching real time data from the Guardian API so user will be warning in case of no internet access.';

  let message = [];
  const rows = messages.split('.');
  for (let i = 0; i < rows.length; i++) {
    message.push(<Typography variant='h6'>{rows[i]}</Typography>)
  }


  return (

    <ThemeProvider theme={theme}>
      <div className={classes.root}>
      <div style={{paddingBottom:100}}>
        <Typography variant='h3' component='span'>Projects</Typography>
      </div>
      <div className={classes.contents}>
        <div>
          <Typography variant='h4'component='span' >Android App: NewsFeed App</Typography>
          {message}
        </div>
        <div style={{ position: 'absolute', right: '20%' }} >
          <img src={NewsFeed} alt='newsfeed' height={500} />
        </div>
      </div>
      <div className={classes.contents}>
        <div>
          <img src={NewsFeed} alt='newsfeed' height={500} />
        </div>
        <div style={{ position: 'absolute', right: '20%' }}>
          <Typography>Android App: NewsFeed App</Typography>

        </div>
      </div>
    </div>

    </ThemeProvider>
  );
}