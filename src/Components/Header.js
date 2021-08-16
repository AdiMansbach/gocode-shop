import './Header.css';
import React, { useState, useEffect, useContext } from "react";
import { Slider } from '@material-ui/core';
import ShoppingContext from '../ShoppingContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 300,
    },
  });

function Header({categories, onChange}) {
    const classes = useStyles();

    const { initialProducts, setProducts } = useContext(ShoppingContext);
    const [ showSlider, setShowSlider ] = useState(false);

    const [value, setValue] = React.useState([0, 5000]);

    const handleChange = (event, newValue) => {
        console.log('newValue ' + newValue)
        setValue(newValue);
        let minValue = newValue.toString().split(",")[0];
        let maxValue = newValue.toString().split(",")[1];
        setProducts(initialProducts.filter (p => p.price < maxValue && p.price > minValue));
    };

    const checkResult = (filter) => {
        if (filter === 'lowToHigh' || filter === 'highToLow'){
            setShowSlider(true);
        }
        else{
            setShowSlider(false);
        }
      }


      function valuetext(value) {
        return `${value}°C`;
      }

    return (
        <div>
        <nav className="product-filter">
            <h1>Jackets</h1>

            <div className="sort">
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <select onChange={(e) => onChange(e.target.value)}>
                        {categories.map((option) => (
                            <option key={option} value={option}>{option}</option>
                            ))}
                    </select>
                </div>

                <div className="collection-sort">
                    <label>Sort by:</label>
                    <select onChange={(e) => checkResult(e.target.value)}>
                    <option value="/">Featured</option>
                    <option value="/">Best Selling</option>
                    <option value="/">Alphabetically, A-Z</option>
                    <option value="/">Alphabetically, Z-A</option>
                    <option value="lowToHigh">Price, low to high</option>
                    <option value="highToLow">Price, high to low</option>
                    <option value="/">Date, new to old</option>
                    <option value="/">Date, old to new</option>
                    </select>
                </div>
              
            </div>
         
        </nav>
        <nav>
            <div className={classes.root}>
                {showSlider && <Slider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />}
            </div>
        </nav>
        </div>
    )
}

export default Header;
