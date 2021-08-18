import './Products.css';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Products({products}) {
    const classes = useStyles();

    return(
        <section className="products">
            <div className={classes.root}>
            <Grid container spacing={3}>
                {products.map((product) => 
                    // <Grid item xs={12}>
                    // <Card>
                            <Product key={product.id} id={product.id} title={product.title} price={product.price} img={product.image} description={product.description} category={product.category}/>
                            // </Card>
                    // </Grid>
                )};
            </Grid>

            {/* <Product title="aa" price="$11" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="bb" price="$12" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="cc" price="$13" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="dd" price="$14" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="ee" price="$15" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/>
            <Product title="ff" price="$16" img="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"/> */}
</div>
        </section>
    );
}

export default Products;
