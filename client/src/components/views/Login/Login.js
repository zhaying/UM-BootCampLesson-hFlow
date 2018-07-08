import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
//import MenuItem from '@material-ui/core/MenuItem';
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

  change(e) {
    this.props.onUpdate(e);
  };

  submit(e) {
    this.props.onSubmitted(e);
  };
  sendOnKey(e) {
      this.props.onKeyPressed(e.key);
  };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root} onKeyPress={ e => this.sendOnKey(e)}>
            <Grid container alignItems={'center'} spacing={24} className={classes.topMargin}>
                <Grid item sm={6} xs={12}>
                    <Paper className={classes.paper}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                                className={classes.textField}
                                margin="normal"
                                onChange={e => this.change(e)}
                                value={this.props.email}
                            />
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                className={classes.textField}
                                margin="normal"
                                onChange={e => this.change(e)}
                                value={this.props.password}
                            />
                        </form>
                        <Button variant="contained" color="primary" className={classes.button} onClick={e => this.submit(e)}>Login</Button>
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
