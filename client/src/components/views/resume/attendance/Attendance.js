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

class Attendance extends React.Component {
  

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Attendance</h1>
                    <ul>
                        <li>
                            People:
                        </li>
                        <li>
                            %Male:
                        </li>
                        <li>
                            %Female:
                        </li>
                        <li>
                            %Spousal Attendance:
                        </li>
                        <li>
                            Peak Night Rooms Committed:
                        </li>
                        <li>
                            Peak Night Total Rooms Reserved:
                        </li>
                        <li>
                            %Reserved/Committed:
                        </li>
                    </ul>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Attendance.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Attendance);