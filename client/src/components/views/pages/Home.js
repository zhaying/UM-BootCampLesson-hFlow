import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../navbar/Navbar';

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
    marginTop: '80px'
  }
});

function Home(props) {
  const { classes } = props;

  return(
    <div className={classes.root}>
    <ButtonAppBar />
      <Grid container spacing={24} className={classes.topMargin}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h2>Orchestrate your team to move towards order and away from chaos...</h2>
            <p className="lead">
              See how hFlow stacks up.
            </p>
            <p className="lead">
              <Button variant="contained" color="primary">FIND OUT NOW</Button>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

}

export default withStyles(styles)(Home);
