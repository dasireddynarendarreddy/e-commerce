import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { context } from './App';

import Books from './Books';

const Read = () => {
  const { number } = useParams();
  const { cartItems,setCartItems,bookData, setBookData } = useContext(context);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (bookData && bookData.length) {
      setBooks(bookData);
    }
  }, [number]);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        {bookData[number] ? (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={bookData[number].image} alt={bookData[number].title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{bookData[number].title}</div>
              <p className="text-gray-700 text-base">
                {bookData[number].subtitle}
              </p>
              <button onClick={()=>setCartItems([...cartItems,bookData[number]])} className='cursor-pointer bg-yellow-500 rounded-lg p-2'>AddToCart</button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Author(s):{bookData[number].authors}
              </span>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/*<div className='flex gap-8'>
        {books.length > 0 ? (
          bookData.map((book, index) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={() => readBook(index)} key={index}>
              <img className="w-45 h-45" src={book.image} alt={book.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer ml-2"
                  onClick={() => addToCart(book)}
                >
                  Download
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>*/}
      <Books number={number}/>
    </div>
  );
};

export default Read;
