import React, {  useContext, useEffect, useState } from 'react'
import './Books.css'
import { context } from './App';

const Books= () => {
  const [bookData, setBookData] = useState([]); // Initialize state
  const[loading,setLoading]=useState(true)
  const {cartItems,setCartItems}=useContext(context);

  useEffect(() => {
    // Use async/await for better error handling
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.dbooks.org/api/recent");

        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)
        setBookData(data.books); // Update state with the fetched data
        setLoading(false)
      } catch (err) {
        console.error("Fetch error: ", err); // Log the error to the console
      }
    };

    fetchData(); 
  }, []); 
  //add to cart func
  const addToCart=(data)=>{
    setCartItems([...cartItems,data])


  }

  return (
    <div className="container">
       
        {loading?<div className="loader"></div>:
     
        bookData.length > 0 ? (
          bookData.map((book, index) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-45 h-45" src={book.image}  alt={book.title} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{book.title}</div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={()=>addToCart(book)}>
  AddToCart
</button>
            </div>
            </div>
          ))
        ) : (
          <li>No books found</li>
        )}
     
    </div>
  );
};




export default Books
