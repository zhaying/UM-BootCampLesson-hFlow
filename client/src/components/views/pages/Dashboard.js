import React from 'react';
<<<<<<< HEAD
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit * 12,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 400
    },
    topMargin: {
        margin: '10% 33% 33% 33%',
    },
    button: {
        margin: '25px',
    }
});

class Dashboard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container alignItems={'center'} spacing={24} className={classes.topMargin}>
          <Grid item sm={6} xs={12}>
            <Paper className={classes.paper}>
              <h1>Protected Dashboard</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  } //render
}

export default withRouter( withStyles(styles)(Dashboard) );
=======
import DashAppBar from '../navbarDash/NavbarDash';


const DashboardPage = () => (
    <div>
      <DashAppBar />
    </div>
);

export default DashboardPage;
>>>>>>> fe38b3acd31a130a07753798a8544effbe9ab29d
