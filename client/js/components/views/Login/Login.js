import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
    },
    topMargin: {
        margin: '10% 33% 33% 33%',
    },
    button: {
        margin: '25px',
    }
});

class TextFields extends React.Component {
//   state = {
//     email: 'Email',
//     age: ''
//   };

//   handleChange = name => event => {
//     this.setState({
//       [email]: event.target.value,
//     });
//   };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24} className={classes.topMargin}>
                <Grid item alignItems={'center'} sm={6} xs={12}>
                    <Paper className={classes.paper}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="required"
                                label="Email"
                                defaultValue=""
                                className={classes.textField}
                                margin="normal"
                            />
                            <TextField
                                required
                                id="required"
                                label="Password"
                                defaultValue=""
                                type="password"
                                className={classes.textField}
                                margin="normal"
                            />
                        </form>
                        <Button variant="contained" color="primary" className={classes.button}>Login</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
