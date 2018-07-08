import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../speedDial/SpeedDial';


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
    }
});

class Overview extends React.Component {
  

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Overview</h1>
                    <p className="lead">In non nulla purus. Nulla dictum nisl lacus, quis semper dui gravida ut. Sed eu metus augue. Donec augue dui, tempor in ante a, elementum laoreet nisi. Etiam nec sapien id magna placerat gravida. Cras id pulvinar mauris. Etiam id efficitur nunc. Praesent laoreet blandit nunc, ac consectetur massa. Nam massa tellus, lacinia non sem at, pretium euismod dui. Nam pellentesque erat nec auctor faucibus. Fusce convallis pulvinar magna, eget dapibus leo laoreet ut. Mauris eu pretium leo. Curabitur non tincidunt lectus.</p>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Overview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Overview);