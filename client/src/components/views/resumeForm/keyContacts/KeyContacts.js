import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../../resume/speedDial/SpeedDial';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
//import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
//import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
//import FormControl from '@material-ui/core/FormControl';
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
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    input: {
        width: 140,
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

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
      <MaskedInput
        {...other}
        ref={inputRef}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

  TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };

class KeyContacts extends React.Component {
    state = {
        textmask: '(1  )    -    ',
        numberformat: '1320',
      };

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

  render() {
    const { classes } = this.props;
    const { textmask } = this.state;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Key Meeting Contatcs</h1>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Email</TableCell>
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
                                        value={textmask}
                                        onChange={this.handleChange('textmask')}
                                        id="formatted-text-mask-input"
                                        inputComponent={TextMaskCustom}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Email:"
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
                                        value={textmask}
                                        onChange={this.handleChange('textmask')}
                                        id="formatted-text-mask-input"
                                        inputComponent={TextMaskCustom}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Email:"
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
                                        value={textmask}
                                        onChange={this.handleChange('textmask')}
                                        id="formatted-text-mask-input"
                                        inputComponent={TextMaskCustom}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        placeholder="Email:"
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

KeyContacts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeyContacts);
