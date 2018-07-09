import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HotelIcon from '@material-ui/icons/Hotel';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Upcoming Events
          </Typography>
          <Typography variant="headline" component="h2">
            Month
          </Typography>
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <HotelIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Event" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <HotelIcon />
                    </ListItemIcon>
                    <ListItemText inset primary="Event" />
                </ListItem>
            </List>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

<<<<<<< HEAD
export default withStyles(styles)(SimpleCard);
=======
export default withStyles(styles)(SimpleCard);
>>>>>>> 344887c8bf78387d322a1940629b12695365b3cc
