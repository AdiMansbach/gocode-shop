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
import AddRemoveProduct from './AddRemoveProduct';
import { yellow } from "@material-ui/core/colors";
import { PlayCircleFilledWhite } from "@material-ui/icons";


const useStyles = makeStyles({

  list: {
    width: 500,
  },
  fullList: {
    width: 'auto',
  },
  listItemSize: {
  },
  header: {
    fontWeight: 600,
    backgroundColor: '#6266DB',
    color: '#FDFEFE'
  },
  imgSize: {
    width: 40,
    height: 40
  },
  titleSize: {
      width: 220,
 },
  amountSize: {
      width: 120
  },
  priceSize: {
      width: 10,
      marginRight: 12
  }
});

export default function ShoppingCart() {
  const { initialProducts, setProducts, productsInCart, setProductsInCart } = useContext(ShoppingContext);
console.log('shoppingCart ' + JSON.stringify(productsInCart))
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum = productsInCart.map(p => p.price*p.amount).reduce(reducer);


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
    //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.header}>
        {['My Shopping Cart'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.header}><ShoppingCartIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
            {/* <List>
                <ListItem>
                    <ListItemText className={classes.imgSize} primary="image" />
                    <ListItemText className={classes.titleSize} primary="product" />
                    <ListItemText className={classes.amountSize} primary="amount" />
                    <ListItemText primary="price" />
                </ListItem>
            </List>

      <Divider /> */}
 
      <List>
        {productsInCart.length > 0 && productsInCart.map((product) => (

          <ListItem button key={product.id} className={classes.listItemSize} alignItems='center' >
            <ListItemIcon className={classes.imgSize}><img src={product.img}/></ListItemIcon>
            <ListItemText className={classes.titleSize} primary={product.title} />
            {/* <ListItemText className={classes.amountSize} primary={product.amount} /> */}
            <div className={classes.amountSize} ><AddRemoveProduct key={product.id} id={product.id} title={product.title} price={product.price} img={product.img}/></div>
            $<ListItemText className={classes.priceSize} primary={product.price*product.amount} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
            <ListItem>
                <ListItemText className={classes.imgSize} primary="total" />
                <ListItemText className={classes.titleSize} />
                <ListItemText className={classes.amountSize}  />
                $<ListItemText primary={sum} />
            </ListItem>
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

