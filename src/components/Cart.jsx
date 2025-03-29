import React, { useEffect, useState } from 'react';
import '../styles/cart.css'; // Import the CSS file for styling

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0); // State to store total cart price

    // Function to remove an item from the cart
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id); // Filter out the item by ID
        setCart(arr); // Update cart state
    };

    // Function to calculate total price
    const handlePrice = () => {
        let ans = 0;
        cart.forEach((item) => { // Loop through cart items
            ans += item.amount * item.price; // Multiply price by quantity
        });
        setPrice(ans); // Update price state
    };

    // useEffect to update total price when cart changes
    useEffect(() => {
        handlePrice(); 
    });

    return (
        <article>
            {cart?.map((item) => ( // Map through cart items
                <div className='cart_box' key={item.id}>
                    <div className='cart_img'>  {/* Product image & title */}
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div>  {/* Quantity update buttons */}
                        <button onClick={() => handleChange(item, +1)}>+</button>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                    </div>
                    <div>  {/* Price & remove button */}
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}

            {/* Display total price */}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span> Rs - {price}</span>
            </div>
        </article>
    );
};

export default Cart;