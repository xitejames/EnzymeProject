import React from 'react';
import DevicesTwoToneIcon from '@material-ui/icons/DevicesTwoTone';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const SideBarList = () => {
    return(
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem button >
              <ListItemIcon><DevicesTwoToneIcon /></ListItemIcon>
              <ListItemText primary={"Available devices"} />
            </ListItem>
          </Link>
          <Link to="/reserve" style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon><AddShoppingCartIcon /></ListItemIcon>
              <ListItemText primary={"Reserve"} />
            </ListItem>
          </Link>
      </List>
    );

}

export default SideBarList;