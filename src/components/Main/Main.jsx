import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProfileList from './ProfileList';
import '../../assets/scss/Main.scss';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flexGrow: 1,
    width: '80%',
    marginTop: 10,
    height: '100%',
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'left',
    overflow: 'hidden',
    fontSize: 20,
    // color: theme.palette.text.secondary,
    height: 300
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className="main">
      <div className={classes.root}>
        <Zoom>
          <ProfileList />
        </Zoom>
      </div>
    </div>

  );
}