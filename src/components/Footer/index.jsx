import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        bottom: 0,
        width: '100%',
        overflow:'hidden',
        marginTop: '30rem',
        background: '#384984',

    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'white',
        // background:'#384984',
        backgroundColor: '#131A22',
        // background: 'linear-gradient(45deg, #2196F3 100%, #21CBF3 0%)'
    }
}))
export default function Footer() {
    const classes = useStyles()
    function FormRow() {
        return (
            <React.Fragment>
                {/* <Grid item xs={1} className={classes.paper}></Grid> */}
                {/* <Grid item xs={1}></Grid> */}

                <Grid item xs={4} className={classes.paper}>
                    <a href='https://www.facebook.com/wilson.cheung.545/' style={{ color: 'white' }}>
                        <FacebookIcon />
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <a href='https://www.linkedin.com/in/wei-bin-zhang/' style={{ color: 'white' }}>
                        <LinkedInIcon />
                    </a>
                </Grid>
                <Grid item xs={4}>
                    <a href='https://github.com/wilsoncheung7' style={{ color: 'white' }}>
                        <GitHubIcon />
                    </a>
                </Grid>
            </React.Fragment>
        )
    }

    function FormRow2(){
        return (
            <div>
                <Grid item xs={4} className={classes.paper}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.paper}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                    <FormRow2/>
                </Grid>
            </Grid>
        </div>

    )
}