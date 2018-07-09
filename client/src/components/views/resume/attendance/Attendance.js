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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import RepeatIcon from '@material-ui/icons/Repeat';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';


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
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Number of Guests:" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Percentage of Spousal Attendance:" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RepeatIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Is this a repeat event?" />
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