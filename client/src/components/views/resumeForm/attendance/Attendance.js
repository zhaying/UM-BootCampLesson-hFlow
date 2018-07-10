import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../../resume/speedDial/SpeedDial';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import RepeatIcon from '@material-ui/icons/Repeat';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


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
                                <Input
                                    placeholder="Number of Guests:"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <Input
                                    placeholder="%Spousal Attendance:"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RepeatIcon />
                                </ListItemIcon>
                                <Input
                                    placeholder="Is this a repeat event?"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                            </ListItem>
                        </List>
                        <Button variant="contained" color="primary" className={classes.button}>Submit</Button>
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