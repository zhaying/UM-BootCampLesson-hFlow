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

class KeyContacts extends React.Component {
  displayTableRow(){
    var data = this.props.data;
    if(data.loading){
      return(<tr><td>Loading Info</td></tr>);
    } else {
      return data.resumes.map(resume =>{

        return(
              <TableRow key={resume.id}>
                  <TableCell>{resume.keyMeetingContacts.name}</TableCell>
                  <TableCell >{resume.keyMeetingContacts.title}</TableCell>
                  <TableCell>{resume.keyMeetingContacts.mobile}</TableCell>
                  <TableCell>{resume.keyMeetingContacts.email}</TableCell>
              </TableRow>
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
                    <h1>Key Meeting Contatcs</h1>
                        <Table className={classes.table}>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Title</TableCell>
                              <TableCell>Mobile</TableCell>
                              <TableCell>Email</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody >
                            {this.displayTableRow()}
                          </TableBody>
                        </Table>
                    <OpenIconSpeedDial />
                </Grid>
            </Grid>
        </div>
    );
  }
}

KeyContacts.propTypes = {
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
})(withStyles(styles)(KeyContacts));
