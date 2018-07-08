import React from 'react';
import { withRouter } from 'react-router-dom';
import Login from '../Login/Login';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  onUpdate = (val) => {
    this.setState({
      [val.target.name]: val.target.value
    });
  };
  onSubmitted = (val) => {
    axios.post('/api/authenticate', {
      email: this.state.email,
      password: this.state.password
    })
    .then( res => {
      localStorage.setItem('hflow-jwt',res.data);
      this.props.history.push('/dashboard');
    })
    .catch(err => console.log("err=",err));
  };

  onKeyPressed = (val) => {
    if (val === 'Enter') {
      console.log('Enter key pressed');
      axios.post('/api/authenticate', {
        email: this.state.email,
        password: this.state.password
      })
      .then( res => {
        localStorage.setItem('hflow-jwt',res.data);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log("err=",err));
    }
  };


  render() {

    return (
      <div>
        <Login onUpdate={this.onUpdate} onSubmitted={this.onSubmitted} onKeyPressed={this.onKeyPressed} />
      </div>
    );
  }
}

export default withRouter(LoginPage);
