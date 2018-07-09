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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupIcon from '@material-ui/icons/Group';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import DescriptionIcon from '@material-ui/icons/Description';


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

class Info extends React.Component {
  

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Info</h1>
                        <List component="nav">
                            <ListItem>
                                <ListItemIcon>
                                    <LocationCityIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Organization Name:" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Event Name:" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <InsertInvitationIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Dates:" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <DescriptionIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Resume Type:" />
                            </ListItem>
                        </List>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                Convention Services Representative:
                                </TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                Catering Representative:
                                </TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                Sales Representative:
                                </TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>  
                        </TableBody>
                    </Table>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);