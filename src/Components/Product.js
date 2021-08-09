import './Product.css';

function Product({title, price, img, description, category}) {

    return (
        <div className="product-card">
            <div className="product-image">
                <img src={img}/>
            </div>
            <div className="product-info">
            <h5>{title}</h5>
            <h5>{category}</h5>
            <h6>${price}</h6>
            <h6>{description}</h6>
            </div>
        </div>
     );
}

export default Product;
