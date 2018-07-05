import React from 'react';
// import { Jumbotron, Button } from 'reactstrap';
import { Button } from '@material-ui/core/Button';
import LoginForm from '../forms/LoginForm';
const Login = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Login</h1>
        <p className="lead">
          <Button variant="contained" color="primary">Login</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Login;
