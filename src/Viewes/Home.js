// import { Home } from "@material-ui/icons"
import Header from '../Components/Header';
import Products from '../Components/Products';
import Loading from '../Components/Loading';
import ShoppingCart from '../Components/ShoppingCart';
import React, { useState, useEffect, useContext } from "react";
import ShoppingContext from '../ShoppingContext';

   const groupBy = (xs, key) => xs.reduce((rv, x) => {
        (rv[x[key]] = true || []);
        return rv;
      }, {});
    

function Home(){

    const [loading, setLoading] = useState(false);
    const { initialProducts, setProducts, productsInCart, setProductsInCart, products, setInitialProducts } = useContext(ShoppingContext);

    const onChangeCategory = (category) => {
        if (category === 'All'){
            setProducts(initialProducts);
        }
        else{
            setProducts(initialProducts.filter((product) => product.category === category));
        }
      }

      let categories = [];//= Object.keys(groupBy(productList, 'category'));

 

      useEffect (() => {
        setLoading(true)
    
        console.log('effect')
        fetch("https://fakestoreapi.com/products")
        .then((res) => 
          res.json()
        )
        .then((json) => {
          setProducts(json)
          setInitialProducts(json);
          setLoading(false)
    
        })
      }, [])
    
    
      categories = Object.keys(groupBy(initialProducts, 'category'));
      categories.unshift('All');

      

    return (
      
        <div className="main">
            {loading && <Loading />}
            <ShoppingCart/>
            <Header categories={categories} onChange={onChangeCategory}/>
            <Products products={products}/>
        </div>
    )

}

export default Home;