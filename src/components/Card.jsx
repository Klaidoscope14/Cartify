import React from 'react';
import '../styles/card.css'; // Import the CSS file for styling

// Card component receives 'item' (product details) and 'handleClick' (function to add item to cart)
const Card = ({ item, handleClick }) => {

    // Destructuring item properties
    const { title, author, price, img } = item;

    return (
        <div className='cards'>  {/* Main card container */}
            <div className='image_box'>  {/* Image section */}
                <img src={img} alt='product' />  
            </div>
            <div className='details'>  {/* Product details section */}
                <p>{title}</p>  {/* Display product title */}
                <p>{author}</p>  {/* Display product author */}
                <p> Price - {price} Rs</p>  {/* Display product price */}
                <button onClick={() => handleClick(item)}>Add to Cart</button>  
                {/* Button triggers handleClick function with item details */}
            </div>
        </div>
    );
}

export default Card;