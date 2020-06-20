import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import '../../assets/scss/Intro.scss';
import {Link,Router} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        textAlign: 'center',
        alignItems: 'center',
        minHeight: 600
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        paddingTop: 300,
        color: 'white',
    },
}));

export default function Intro() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant='h3' component='h2'>
                    Hello, I'm <strong style={{ color: '#FF8E53' }}>Wilson Zhang</strong>.
            </Typography>
                <Typography variant='h4' component='h2'>
                    I'm a software developer.
            </Typography>
                <Button>
                <Link to={ROUTES.DETAILS}>

                {/* <a href=''> */}
                        <span />
                        <span />
                        <span />
                        <span />
                View my work
                <ArrowForwardIcon />
                    {/* </a> */}
                </Link>

                </Button>

            </div>

        </div>
    )
}