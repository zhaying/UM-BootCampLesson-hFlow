import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../speedDial/SpeedDial';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HotelIcon from '@material-ui/icons/Hotel';
//import GroupIcon from '@material-ui/icons/Group';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MicIcon from '@material-ui/icons/Mic';
import MovieIcon from '@material-ui/icons/Movie';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';


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

class AccountBreakdown extends React.Component {


  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Master Account Breakdown</h1>
                        <Typography>
                            Each of the Master Accounts established will be sub-devided as follows:
                        </Typography>
                        <List component="nav">
                            <ListItem>
                                <ListItemIcon>
                                    <HotelIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Room and Tax" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RestaurantIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Food and Beverage" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MicIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Sound and Lighting" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MovieIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Audio Visual Presentation Services" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <BusinessCenterIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Business Center" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <NotificationsIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Bellman Charges" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <RoomServiceIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Package Room Charges" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <AllInclusiveIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Other Miscellaneous Charges" />
                            </ListItem>
                        </List>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

AccountBreakdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountBreakdown);
