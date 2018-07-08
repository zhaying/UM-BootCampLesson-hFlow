import React from 'react';
import { getJwt } from '../subcom/jwt';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AuthenticatedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null

    }
  }

  componentDidMount() {
    const jwt = getJwt();
    if(!jwt) {
      this.props.history.push('/login');
    }

    axios.get('/api/userAuthorization', {headers:{Authorization: `Bearer ${jwt}` } })
    .then(res => {
      console.log('res.data=', res.data);
      this.setState({ user: res.data.email });
    })
    .catch(err => {
      localStorage.removeItem('hflow-jwt');
      this.props.history.push('/login');
    });
  }

  render() {

    if(this.state.user === null) {
      return (
        <div>
        <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }

  } //render
}

export default withRouter(AuthenticatedComponent);
