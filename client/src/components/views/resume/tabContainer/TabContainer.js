import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Overview from '../overview/Overview';
import Attendance from '../attendance/Attendance';

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
    backgroundColor: "#FAFAFA",
  },
});

class TabsWrappedLabel extends React.Component {
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
          <Overview />
          <Attendance />
        </TabContainer>}
        {value === 'two' && <TabContainer>
          <Overview />
          <Attendance />
        </TabContainer>}
        {value === 'three' && <TabContainer>
          <Overview />
          <Attendance />
        </TabContainer>}
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);