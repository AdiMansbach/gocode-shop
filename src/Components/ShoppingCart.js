import React, { useState, useEffect, useContext } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingContext from '../ShoppingContext';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  imgSize: {
    width: 40,
    height: 40
  },
  titleSize: {
      width: 230
  },
  amountSize: {
      width: 55
  }
});

export default function ShoppingCart() {
  const { initialProducts, setProducts, productsInCart, setProductsInCart } = useContext(ShoppingContext);
console.log('shoppingCart ' + JSON.stringify(productsInCart))

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['My Shopping Cart'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><ShoppingCartIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
 
      <List>
        {productsInCart.length > 0 && productsInCart.map((product) => (
          <ListItem button key={product.id}>
            <ListItemIcon className={classes.imgSize}><img src={product.img}/></ListItemIcon>
            <ListItemText className={classes.titleSize} primary={product.title} />

            <ListItemText className={classes.amountSize} primary={product.amount} />
            $<ListItemText primary={product.price} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

