import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import LoginForm from '../forms/LoginForm';
const Login = () => (
    <div>
      <Jumbotron>
        <h1 className="display-3">Login</h1>
        <p className="lead">
          <Button color="primary">Login</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Login;
