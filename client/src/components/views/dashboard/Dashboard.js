import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../card/Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topMargin: {
    margin: '5px',
  },
  cMargin: {
    margin: '30px',
  }
});

function Dashboard(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={classes.cMargin} justify="center" spacing={24}>
        <Grid container className={classes.topMargin} justify="center" spacing={24}>
            <Grid item xs={6}>
              <SimpleCard />
            </Grid>
        </Grid>
        <Grid container className={classes.topMargin} justify="center" spacing={24}>
            <Grid item xs={6}>
              <SimpleCard />
            </Grid>
        </Grid>
        <Grid container className={classes.topMargin} justify="center" spacing={24}>
            <Grid item xs={6}>
              <SimpleCard />
            </Grid>
        </Grid>
        <Grid container className={classes.topMargin} justify="center" spacing={24}>
            <Grid item xs={6}>
              <SimpleCard />
            </Grid>
        </Grid>
        <Grid container className={classes.topMargin} justify="center" spacing={24}>
            <Grid item xs={6}>
              <SimpleCard />
            </Grid>
        </Grid>
        <Grid container className={classes.topMargin} justify="center" spacing={24}>
            <Grid item xs={6}>
              <SimpleCard />
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);