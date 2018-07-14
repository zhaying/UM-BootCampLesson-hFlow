import React from 'react';
import { withRouter } from 'react-router-dom';
import { getJwt } from '../../subcom/jwt';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import { grey } from '@material-ui/core/colors';

const styles = {
  root: {
    flexGrow: 1,
    background: '#00D49D',
    boxShadow: 'none',
    color: '#fff'
  },
  flex: {
    flex: 1,
    color: '#fff'
  },
  color: {
    color: '#fff'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class MenuAppBar extends React.Component {

  submitLogout(e) {
    localStorage.removeItem('hflow-jwt');
    this.props.history.push('/login');
  };

  render() {
    const theJwt = getJwt();
    let button;
    if(!theJwt) {
      button = <Button className={classes.color} href="/login" >Login</Button>
    } else {
      button = <Button onClick={e => this.submitLogout(e)} >Logout</Button>
    }

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
        className={classes.positionStatic}
        classes={{
          root: classes.root // class name, e.g. `classes-nesting-root-x`
        }}
        >
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="title" className={classes.flex}>
              Atriad
            </Typography>
            <Button className={classes.color} href="/" >Prices</Button>
            <Button className={classes.color} href="/dashboard" >Dashboard</Button>

            {button}

          </Toolbar>
        </AppBar>
      </div>
    );
  } //render
}
MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withRouter( withStyles(styles)(MenuAppBar) );
