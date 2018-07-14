import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import OpenIconSpeedDial from '../speedDial/SpeedDial';
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemText from '@material-ui/core/ListItemText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {graphql} from 'react-apollo';//serves as the glue


//
import{getExecutivesQuery} from '../../../queries/queries.js';

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


class Executives extends React.Component {
  displayExecutives(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading Executives</div>);
    } else {
      return data.executives.map(executive =>{
        return(
          <TableRow key={executive.id} >
              <TableCell>{executive.name}</TableCell>
              <TableCell>{executive.title}</TableCell>
              <TableCell>{executive.preferences}</TableCell>
          </TableRow>
        );
      })
    }
  }

  render() {
    const {executives} = this.props.data;
    const { classes } = this.props;
    console.log("console.log.executive=",this.props);
    if (executives){
      console.log("In if executive");
        return (
            <div className={classes.root}>
                <Grid container alignItems={'center'} spacing={24}>
                    <Grid item xs={12}>
                        <h1>Executives</h1>

                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Preferences</TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                                {this.displayExecutives()}
                            </TableBody>
                        </Table>
                        <OpenIconSpeedDial />
                    </Grid>
                </Grid>
            </div>
        );

    } else{
      console.log("In else executive");
     return(
       <div className={classes.root}>
            <Grid container alignItems={'center'} spacing={24}>
                <Grid item xs={12}>
                    <h1>Executives</h1>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Dates</TableCell>
                                    <TableCell>Amenities</TableCell>
                                    <TableCell>Preferences</TableCell>
                                </TableRow>
                            </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell ></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
     );
   }

  }
}

Executives.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default graphql(getExecutivesQuery, {
  options:(props) =>{
    return{
      variables:{
        id:props.executiveId
      }
    }
  }
})(withStyles(styles)(Executives));
