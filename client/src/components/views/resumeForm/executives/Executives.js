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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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
    input: {
        width: 98,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 400
    }
});

class Executives extends React.Component {
  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Executives</h1>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Dates</TableCell>
                                    <TableCell>Amenities</TableCell>
                                    <TableCell>Preferences</TableCell>
                                </TableRow>
                            </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Input
                                        placeholder="Name:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell >
                                    <Input
                                        placeholder="Title:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Dates:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Amenities:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Preferences:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Input
                                        placeholder="Name:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell >
                                    <Input
                                        placeholder="Title:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Dates:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Amenities:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Preferences:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Input
                                        placeholder="Name:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell >
                                    <Input
                                        placeholder="Title:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Dates:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Amenities:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Preferences:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Button variant="contained" color="primary" className={classes.button} >Submit</Button>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Executives.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Executives);
