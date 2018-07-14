import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../card/Card';
import {graphql} from 'react-apollo';//serves as the glue

//graphql data query
import{getEventsQuery} from '../../queries/queries.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  topMargin: {
    margin: '5px',
  },
  cMargin: {
    margin: '30px',
  }
});

//function Dashboard(props) {
class Dashboard extends React.Component {

  displayEvents(){
    var classes = this.props.classes;
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Events</div>);
    } else {
      return data.events.map(event =>{
        console.log(event);
        return(
          <Grid key={event.id} container className={classes.topMargin} justify="center" spacing={24}>
              <Grid item xs={6} >
                <SimpleCard eventData={event} />
              </Grid>
          </Grid>
        );
      })
    }
  }
  render() {
    console.log("this.props=",this.props);
  
  const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.cMargin} justify="center" spacing={24}>
        {this.displayEvents()}
        </Grid>
      </div>
    );
  }

}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default graphql(getEventsQuery, {
  options:(props) =>{
    return{
      variables:{
        id:props.executiveId
      }
    }
  }
})(withStyles(styles)(Dashboard));
