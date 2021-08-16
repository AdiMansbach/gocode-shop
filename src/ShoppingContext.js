
import React from "react";

// set the defaults
const ShoppingContext = React.createContext({
    initialProducts: [],
    setProducts: () => {}
});

export default ShoppingContext;
