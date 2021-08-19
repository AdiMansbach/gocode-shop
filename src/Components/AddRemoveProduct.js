import './AddRemoveProduct.css';
import React, { useState, useEffect, useContext } from "react";
import ShoppingContext from '../ShoppingContext';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

function AddRemoveProduct({id, title, price, img, amount}){
    // console.log('id ' + id)

    const { initialProducts, setProducts, productsInCart, setProductsInCart } = useContext(ShoppingContext);

    const productInCart = productsInCart.length > 0 ? productsInCart.find(product => product.id == id) : undefined;

    const addToCart = () => {
        console.log('addToCart')
        console.log('productInCart ' + JSON.stringify(productInCart))

        if (productInCart === undefined){
            let item = {id: id, title: title, price: price, img: img, amount: 1};
            setProductsInCart([item, ...productsInCart]);
            console.log('productsInCart ' + JSON.stringify(productsInCart))

        }
        else{
            setProductsInCart(productsInCart.map(product => product.id === id ? {...product, amount: product.amount+1, price: product.price} : product));
        }
      }

      const removeFromCart = () => {
        console.log('removeFromCart')
        console.log('productsInCart ' + JSON.stringify(productsInCart))

        console.log('productInCart ' + JSON.stringify(productInCart))

        if (productInCart !== undefined){
            if (productInCart.amount > 1){
                setProductsInCart(productsInCart.map(product => product.id === id ? {...product, amount: product.amount-1} : product));
            }
            else{
                setProductsInCart(productsInCart.filter(product => product.id !== id));
            }  
        }
        
      }

    return(
        <div className="addRemoveDiv">
            {productInCart && <RemoveShoppingCartIcon className="padding" onClick={ () => removeFromCart()}/>}
            {productInCart && <span className="padding bold">{productInCart.amount}</span>}
            <AddShoppingCartIcon className="padding" onClick={ () => addToCart()}/>
        </div>
    )
}

export default AddRemoveProduct;
