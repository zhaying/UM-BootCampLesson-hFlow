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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import GroupIcon from '@material-ui/icons/Group';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import DescriptionIcon from '@material-ui/icons/Description';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MaskedInput from 'react-text-mask';
import FormControl from '@material-ui/core/FormControl';
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
  


class Info extends React.Component {
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
                    <h1>Info</h1>
                        <List component="nav">
                            <ListItem>
                                <ListItemIcon>
                                    <LocationCityIcon />
                                </ListItemIcon>
                                <ListItemText inset>
                                <Input
                                    placeholder="Organization Name:"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <GroupIcon />
                                </ListItemIcon>
                                <ListItemText inset>
                                <Input
                                    placeholder="Event Name:"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <InsertInvitationIcon />
                                </ListItemIcon>
                                <ListItemText inset>
                                <Input
                                    placeholder="Dates:"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <DescriptionIcon />
                                </ListItemIcon>
                                <ListItemText inset>
                                <Input
                                    placeholder="Resume Type:"
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'Description',
                                    }}
                                />
                                </ListItemText>
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
                                <TableCell >
                                    <Input
                                        placeholder="Name:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <FormControl className={classes.formControl}>
                                        <Input
                                            value={textmask}
                                            onChange={this.handleChange('textmask')}
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustom}
                                        />
                                    </FormControl>
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
                                Catering Representative:
                                </TableCell>
                                <TableCell >
                                    <Input
                                        placeholder="Name:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <FormControl className={classes.formControl}>
                                        <Input
                                            value={textmask}
                                            onChange={this.handleChange('textmask')}
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustom}
                                        />
                                    </FormControl>
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
                                Sales Representative:
                                </TableCell>
                                <TableCell >
                                    <Input
                                        placeholder="Name:"
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'Description',
                                        }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <FormControl className={classes.formControl}>
                                        <Input
                                            value={textmask}
                                            onChange={this.handleChange('textmask')}
                                            id="formatted-text-mask-input"
                                            inputComponent={TextMaskCustom}
                                        />
                                    </FormControl>
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

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Info);