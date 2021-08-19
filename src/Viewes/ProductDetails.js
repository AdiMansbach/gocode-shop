import {useParams} from "react-router-dom"
import React, { useState, useEffect } from "react";


function ProductDetails(){
    console.log('ProductDetails')

    const {id} = useParams();
    console.log('id ' + id)


    const[product, setProduct] = useState();

    useEffect (() => {
        // setLoading(true)
    
        console.log('effect')
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json()
        )
        .then((json) => setProduct(json));
      }, [id])

      console.log('product ' + JSON.stringify(product))


    return(
        <div>
            <div>
                ProductDetails
            </div>
            <div>
                {product && product.title}
            </div>
        </div>
    )
}

export default ProductDetails;