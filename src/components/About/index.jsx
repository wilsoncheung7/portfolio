import React from 'react';
import { makeStyles, Typography, createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core';
import NewsFeed from '../../assets/images/newsfeed.png';
import InsClone from '../../assets/images/insclone.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: 'white',
    margin:100
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
theme.typography.h6 = {
  fontSize: '1rem'
}

export default function About() {
  const classes = useStyles();
  const messages = 'Started at 2012.'+'Graduated at 2017.'+'Richmond Hill, ON, Canada';

  let message = [];
  const rows = messages.split('.');
  for (let i = 0; i < rows.length; i++) {
    message.push(<Typography variant='h6'>{rows[i]}</Typography>);
  }

  const messages2 = 'Started at 2017.'+'Currently studying.'+'North York, ON, Canada';

  let message2 = [];
  const rows2 = messages2.split('.');
  for (let i = 0; i < rows2.length; i++) {
    message2.push(<Typography varient='h6'>{rows2[i]}</Typography>);
  }


  return (

    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div style={{ paddingBottom: 100 }}>
          <Typography variant='h3' component='span'>About</Typography>
        </div>
        <div className={classes.contents}>
          <div>
            <Typography variant='h4' component='span'>Richmond Hill High School</Typography>
            {message}
          </div>
          {/* <div style={{marginLeft: '10%'}} >
            <img src={NewsFeed} alt='newsfeed' height={500} />
          </div> */}
        </div>
        <div className={classes.contents}>
          {/* <div>
            <img src={InsClone} alt='newsfeed' height={500} />
          </div> */}
          <div>
            <Typography variant='h4' component='span'>York University</Typography>
            {message2}
          </div>
        </div>
      </div>

    </ThemeProvider>
  );
}