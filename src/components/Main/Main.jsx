import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import * as ROUTES from '../../constants/routes';
import ProfileList from './ProfileList';
import SkillList from './SkillList';
import HabbitList from './HabbitList';
import EducationList from './EducationList';
import '../../assets/scss/Main.scss';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
import Bounce from 'react-reveal/Bounce';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    position:'relative',
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

const fade=element=>{
  const op=1;
  let timer=setInterval(()=>{
    if(op<=0.1){
      clearInterval(timer);
      element.style.display='none';
    }
    element.style.opacity=op;
    element.style.filter='alpha(opacity='+op*100+")";
    op-=op*0.1;
  },50);
}

export default function Main() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>


      </React.Fragment>
    );
  }

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