import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../speedDial/SpeedDial';
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

class Overview extends React.Component {
  displaySummary(){
    var data = this.props.data;
    if(data.loading){
      var message = "Loading Info";
      return(message);
    } else {
      return data.resumes.map(resume =>{
        return(
          resume.meetingOverview.summary
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
                    <h1>Meeting Overview</h1>
                    <p className="lead">{this.displaySummary()}</p>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Overview.propTypes = {
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
})(withStyles(styles)(Overview));
