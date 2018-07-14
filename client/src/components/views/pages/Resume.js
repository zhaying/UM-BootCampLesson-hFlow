import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TabsWrappedLabel from '../resume/tabContainer/TabContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topMargin: {
    marginTop: '80px',
    marginLeft: '15%'
  }
});

function Resume(props) {
  const { classes } = props;

  return(
    <div className={classes.root}>
      <Grid container spacing={24} className={classes.topMargin}>
        <Grid item xs={12} sm={8}>
        <Paper className={classes.paper}>
            <Typography variant="title" color="inherit">
                Month

            </Typography>
            <Typography className={classes.title} color="textSecondary">
            Meeting/Convention Resumes
            </Typography>
            <TabsWrappedLabel />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

  Resume.propTypes = {
    classes: PropTypes.object.isRequired,
  };

}

export default withStyles(styles)(Resume);
