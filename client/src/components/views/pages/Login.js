import React from 'react';
import axios from 'axios';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  change(e) {
    this.setState({
      [e.target.value]: e.target.value
    });
  }
  submit(e) {
    e.preventDefault();
    axios.post('/authenticate', {
      email: this.state.email,
      password: this.state.password
    }).then(res => localStorage.setItem('user-profile', res.data));
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
              id="email"
              label="email"
              hintText="Enter your Username"
              floatingLabelText="Username"
              value={this.state.email}
              onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
             id="password-input"
          label="Password"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               value={this.state.password}
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>

             <Button raised label="Submit" primary={true} style={style} color="primary" onClick={(event) => this.submit(event)}>
             Submit
             </Button>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};

export default Login;
