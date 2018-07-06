import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Login(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
        <p className="lead">
          <Button variant="contained" color="primary">Login</Button>
        </p>
      </Paper>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);


// import React from 'react';
// // import { Jumbotron, Button } from 'reactstrap';
// import { Button } from '@material-ui/core/Button';
// import LoginForm from '../forms/LoginForm';
// const Login = () => (
//     <div>
//       <Jumbotron>
//         <h1 className="display-3">Login</h1>
//         <p className="lead">
//           <Button variant="contained" color="primary">Login</Button>
//         </p>
//       </Jumbotron>
//     </div>
// );

// export default Login;
