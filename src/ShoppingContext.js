
import React from "react";

// set the defaults
const ShoppingContext = React.createContext({
    initialProducts: [],
    setProducts: () => {},
    productsInCart: [],
    setProductsInCart: () => {}
});

export default ShoppingContext;
