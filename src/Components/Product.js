import './Product.css';
import React, { useState, useEffect, useContext } from "react";
import ShoppingContext from '../ShoppingContext';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import AddRemoveProduct from './AddRemoveProduct';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


function Product({id, title, price, img, description, category}) {
    const { initialProducts, setProducts, productsInCart, setProductsInCart } = useContext(ShoppingContext);

    // const productInCart = productsInCart.length > 0 ? productsInCart.find(product => product.id == id) : undefined;

    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();


    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    // const addToCart = () => {
    //     console.log('addToCart')
    //     console.log('productInCart ' + JSON.stringify(productInCart))

    //     if (productInCart === undefined){
    //         let item = {id: id, title: title, category: category, price: price, img: img, description: description, amount: 1};
    //         setProductsInCart([item, ...productsInCart]);
    //         console.log('productsInCart ' + JSON.stringify(productsInCart))

    //     }
    //     else{
    //         setProductsInCart(productsInCart.map(product => product.id === id ? {...product, amount: product.amount+1} : product));
    //     }
    //     // setProducts(initialProducts.map(product => product.id === id ? {...product, amount: product.amount+1} : product));
    //   }

    //   const removeFromCart = () => {
    //     console.log('removeFromCart')
    //     console.log('productsInCart ' + JSON.stringify(productsInCart))

    //     console.log('productInCart ' + JSON.stringify(productInCart))

    //     if (productInCart !== undefined){
    //         if (productInCart.amount > 1){
    //             setProductsInCart(productsInCart.map(product => product.id === id ? {...product, amount: product.amount-1} : product));
    //         }
    //         else{
    //             setProductsInCart(productsInCart.filter(product => product.id !== id));
    //         }  
    //     }
        
    //   }


    return (
        <div className="product-card">
            <div className="product-image">
                <img src={img}/>
            </div>
            <div className="product-info">
            <h5>{title}</h5>
            <h5>{category}</h5>
            <h6>${price}</h6>
            {/* <button type="button" onClick={ () => removeFromCart()}>-</button> */}
            {/* <button type="button" onClick={ () => addToCart()}>+</button> */}
            {/* <div className="addRemoveDiv">
                {productInCart && <RemoveShoppingCartIcon className="padding" onClick={ () => removeFromCart()}/>}
                {productInCart && <span className="padding bold">{productInCart.amount}</span>}
                <AddShoppingCartIcon className="padding" onClick={ () => addToCart()}/>
            </div> */}
            <AddRemoveProduct key={id} id={id} title={title} price={price} img={img}/>
            </div>
            <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {description}
                </Collapse>
        </div>
     );
}

export default Product;
