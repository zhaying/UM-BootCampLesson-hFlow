import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../speedDial/SpeedDial';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import RepeatIcon from '@material-ui/icons/Repeat';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import {graphql} from 'react-apollo';//serves as the glue


//
import{getResumesQuery} from '../../../queries/queries.js';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit * 12,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: 400
    }
});

class Attendance extends React.Component {

  displayAttendance(){
    var data = this.props.data;
    console.log("Resumes.data=",data);
    if(data.loading){
      return(<div>Loading Info</div>);
    } else {
      return data.resumes.map(resume =>{
        console.log("displayInfo.info=",resume);
        return(
          <List key={resume.id} component="nav">
              <ListItem>
                  <ListItemIcon>
                      <PersonIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={"Number of Guests: " + resume.attendance.numberOfGuests} />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <GroupIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={"Percentage of Spousal Attendance: " + resume.attendance.percentageOfSpousalAttendance} />
              </ListItem>
              <ListItem>
                  <ListItemIcon>
                      <RepeatIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={"Is this a repeat event? " + resume.attendance.repeatEvent} />
              </ListItem>
          </List>
        );
      })
    }
  }


  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Attendance</h1>
                    {this.displayAttendance()}
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Attendance.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default graphql(getResumesQuery, {
  options:(props) =>{
    return{
      variables:{
        id:props.executiveId
      }
    }
  }
})(withStyles(styles)(Attendance));
