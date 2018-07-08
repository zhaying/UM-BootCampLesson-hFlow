import React from 'react';
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
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    // background: '#FAFAFA',
    background: 'transparent',
    boxShadow: 'none'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar
      className={classes.positionSticky}
      classes={{
        root: classes.root // class name, e.g. `classes-nesting-root-x`
      }}
      >
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="inherit" href="/login" >Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

// import React, { Component } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem
// } from 'reactstrap';
// import { Link } from 'react-router-dom';

// export default class NavBar extends Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">hFlow </NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <Link className="nav-link" to="/products">Products</Link>
//               </NavItem>
//               <NavItem>
//                 <Link className="nav-link" to="/customers">Customers</Link>
//               </NavItem>
//               <NavItem>
//               <Link className="nav-link" to="/use-cases">Use Cases</Link>
//               </NavItem>
//               <NavItem>
//               <Link className="nav-link" to="/support">Support</Link>
//               </NavItem>
//               <NavItem>
//               <Link className="nav-link" to="/contact-us">Contact Sales</Link>
//               </NavItem>
//               <NavItem>
//               <Link className="nav-link" to="/login">Login</Link>
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
