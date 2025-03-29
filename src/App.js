import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import './App.css'; 
import Cart from './components/Cart'; 

const App = () => {
  // State to manage items in the cart
  const [cart, setCart] = useState([]);

  // State to show a warning when an item is already in the cart
  const [warning, setWarning] = useState(false);

  // State to toggle between Shop and Cart views
  const [show, setShow] = useState(true);

  // Function to handle adding an item to the cart
  const handleClick = (item) => {
    let isPresent = false;
    
    // Check if the item is already in the cart
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });

    if (isPresent) {
      // Show warning if the item is already in the cart
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000); // Hide the warning after 2 seconds
      return;
    }

    // Add the item to the cart
    setCart([...cart, { ...item, amount: 1 }]); // Adding initial quantity
  };

  // Function to handle quantity changes of items in the cart
  const handleChange = (item, d) => {
    let ind = -1;

    // Find the index of the item in the cart
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });

    const tempArr = [...cart]; // Creating a copy of the cart array
    tempArr[ind].amount += d; // Updating the quantity

    // Ensure quantity does not go below 1
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }

    // Update the cart state
    setCart(tempArr);
  };

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />

      {/* Conditionally rendering Shop or Cart based on 'show' state */}
      {show ? <Shop handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}

      {/* Display warning message if an item is already in the cart */}
      {warning && <div className='warning'> Item is already in your cart </div>}
    </div>
  );
};

export default App;