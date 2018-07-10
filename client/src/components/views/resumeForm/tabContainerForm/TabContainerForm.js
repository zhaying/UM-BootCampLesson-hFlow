import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Overview from '../overview/Overview';
import Attendance from '../attendance/Attendance';
import Info from '../info/Info';
import KeyContacts from '../keyContacts/KeyContacts';
import OffSiteActivities from '../offSite/OffSite';
import ShuttleSchedules from '../shuttleSchedules/ShuttleSchedules';
import Executives from '../executives/Executives';
import AccountBreakdown from '../../resume/accountBreakdown/AccountBreakdown';
// import AuthorizedSignatures from '../authorizedSignatures/AuthorizedSignatures';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class TabContainerForm extends React.Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Hilton" />
            <Tab value="two" label="Global Tech Women's Tech Conference" />
            <Tab value="three" label="Marriot" />
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer>
          <Info />
          <Overview />
          <Attendance />
          <KeyContacts />
          <OffSiteActivities />
          <ShuttleSchedules />
          <Executives />
          <AccountBreakdown />
          {/* <AuthorizedSignatures /> */}
          </TabContainer>}
        {value === 'two' && <TabContainer>
          {/* <Info />
          <Overview />
          <Attendance />
          <KeyContacts />
          <OffSiteActivities />
          <ShuttleSchedules />
          <Executives />
          <AccountBreakdown />
          <AuthorizedSignatures /> */}
          </TabContainer>}
        {value === 'three' && <TabContainer>
          {/* <Info />
          <Overview />
          <Attendance />
          <KeyContacts />
          <OffSiteActivities />
          <ShuttleSchedules />
          <Executives />
          <AccountBreakdown />
          <AuthorizedSignatures /> */}
          </TabContainer>}
      </div>
    );
  }
}

TabContainerForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabContainerForm);
