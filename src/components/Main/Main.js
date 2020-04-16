import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80%',
    marginTop:10,
    // height: '50%',
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

export default function NestedGrid() {
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

  return (
    <div className="main">
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={6}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={6}>
            <FormRow2 />
          </Grid>
        </Grid>
      </div>
    </div>

  );
}