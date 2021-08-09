import './Products.css';
import Product from './Product';


function Products({products}) {

    return(
        <section className="products">

            {products.map((product) => 
                <Product key={product.id} title={product.title} price={product.price} img={product.image} description={product.description} category={product.category}/>
            )};

            {/* <Product title="aa" price="$11" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="bb" price="$12" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="cc" price="$13" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="dd" price="$14" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="ee" price="$15" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="ff" price="$16" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/> */}

        </section>
    );
}

export default Products;
