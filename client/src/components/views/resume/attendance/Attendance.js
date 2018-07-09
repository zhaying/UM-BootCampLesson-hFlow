import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../speedDial/SpeedDial';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


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
                        <List component="nav">
                            <ListItem>
                                <ListItemText inset primary="People:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary="%Male:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary="%Female:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary="%Spousal Attendance:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary="Peak Night Rooms Committed:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary="Peak Night Total Rooms Reserved:" />
                            </ListItem>
                            <ListItem>
                                <ListItemText inset primary="%Reserved/Committed:" />
                            </ListItem>
                        </List>
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