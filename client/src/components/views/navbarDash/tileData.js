import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
//import ReportIcon from '@material-ui/icons/Report';
import Button from '@material-ui/core/Button';
import AddIcon  from '@material-ui/icons/Add';
import EditIcon  from '@material-ui/icons/Edit'

export const mailFolderListItems = (
  <div>
    <Button  href="/newresume">
    <ListItem>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="New"/>
    </ListItem>
    </Button>
    <Button  href="/resumeform">
    <ListItem>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary="Edit"/>
    </ListItem>
    </Button>
    <Button  href="/newresume">
    <ListItem>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox"/>
    </ListItem>
    </Button>
    <Button>
    <ListItem>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    </Button>
    <Button>
    <ListItem>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send" />
    </ListItem>
    </Button>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <Button>
    <ListItem>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Messages" />
    </ListItem>
    </Button>
    <Button>
    <ListItem>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    </Button>
  </div>
);
