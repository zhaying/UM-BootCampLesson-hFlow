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
        marginLeft: theme.spacing.unit,
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
    },
    topMargin: {
        marginTop: '80px'
    }
});

// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   topMargin: {
//     marginTop: '80px'
//   }
// });

// function Login(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24} className={classes.topMargin}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>xs=12 sm=6</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>xs=12 sm=6</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );


// Login.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// }

// export default withStyles(styles)(Login);