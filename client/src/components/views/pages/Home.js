import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from '../navbar/MenuAppBar';
import zIndex from '@material-ui/core/styles/zIndex';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: '500px',
    height: '900px',
    width: '90%'
  },
  topMargin: {
    background: '#00D49D',
    textAlign: 'center',
    height: '600px',
  },
  color: {
    background: '#FAFAFA',
    textAlign: 'center',
    height: '800px',
    zIndex: '1000' 
  }
});

function Home(props) {
  const { classes } = props;

  return(
    <div className={classes.root}>
    <MenuAppBar />
      <Grid container justify="center" spacing={0}>
        <Grid container justify="center" spacing={0} className={classes.topMargin}>
        text
          <Grid item xs={12}>
          <Typography variant="headline" component="h3">
              This is a our body text.
            </Typography>
            <Grid container justify="center"  spacing={0}>
            text
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="headline" component="h3">
                  This is a sheet of paper.
                </Typography>
                <Typography component="p">
                  Paper can be used to build surface or other elements for your application.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    
    </div>
  );

  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

}

export default withStyles(styles)(Home);
