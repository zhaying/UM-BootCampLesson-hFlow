import React from 'react';
import Login from '../Login/Login';
import ButtonAppBar from '../navbar/Navbar';

const LoginPage = () => (
    <div>
      <ButtonAppBar />
      {/* <Jumbotron>
        <h1 className="display-3">Login</h1>
        <p className="lead">
          <Button variant="contained" color="primary">Login</Button>
        </p>
      </Jumbotron> */}
      <Login />
    </div>
);

export default LoginPage;
