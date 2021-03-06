import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
    margin: '0',
  }
});

//function Dashboard(props) {
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  displayEvents(){
    var classes = this.props.classes;
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Events</div>);
    } else {
      return data.events.map(event =>{
        return(
          <Grid container className={classes.topMargin} justify="center" spacing={24}>
              <Grid item xs={6}>
              <p>{event.name}</p>
                <SimpleCard />
              </Grid>
          </Grid>
          // <TableRow key={executive.id} >
          //     <TableCell>{executive.name}</TableCell>
          //     <TableCell>{executive.title}</TableCell>
          //     <TableCell>{executive.dates}</TableCell>
          //     <TableCell>amenities</TableCell>
          //     <TableCell>{executive.preferences}</TableCell>
          // </TableRow>
        );
      })
    }
  }
  render() {
    console.log("this.props=",this.props);
  const {events} = this.props.data;
  const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Grid container className={classes.cMargin} justify="center" spacing={24}>
        {this.displayExecutives()}
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
          // <Grid container className={classes.topMargin} justify="center" spacing={24}>
          //     <Grid item xs={6}>
          //       <SimpleCard />
          //     </Grid>
          // </Grid>
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
