import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import * as ROUTES from '../../constants/routes';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LockIcon from '@material-ui/icons/Lock';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ProfileList from './ProfileList';
import SkillList from './SkillList';
import HabbitList from './HabbitList';
import EducationList from './EducationList';
import '../../assets/scss/Main.scss';
import Grow from '@material-ui/core/Grow';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  root: {
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
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function Main() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6} wrap="wrap">
          {/* <Link to={ROUTES.PASSWORD_CHANGE}> */}
          <Paper className={classes.paper}>
            <AccountBoxIcon />
              Personal Profile
              <ProfileList />
          </Paper>
          {/* </Link> */}
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <CardMembershipIcon />
            Skill
            <SkillList />

          </Paper>
        </Grid>
        {/* <SnowFlakes/> */}
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <CreditCardIcon />
            Habbit
            <HabbitList />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LockIcon />
            Education
            <EducationList />
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="main">
      <div className={classes.root}>

        <Grid container wrap='nowrap' spacing={1}>
          <Grid container item xs={12} spacing={6}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={6}>
            <FormRow2 />
          </Grid>
        </Grid>
      {/* <div className={classes.container}>
        <Grid container item xs={12} spacing={6}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={6}>
            <FormRow2 />
          </Grid>
      </div> */}
      </div>
    </div>

  );
}