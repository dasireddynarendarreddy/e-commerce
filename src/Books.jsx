import React, {  useContext, useEffect, useState } from 'react'
import './Books.css'
import { useNavigate } from 'react-router-dom';
import { context } from './App';

const Books= (number) => {
 /* const [bookData, setBookData] = useState([]); // Initialize state
  const[loading,setLoading]=useState(true)*/
  const {cartItems,setCartItems,loading,bookData,setLoading,setBookData}=useContext(context);
  const[bname,setbname]=useState('')
  const navigate=useNavigate();
  let query='recent'

  /*useEffect(() => {
    
    const fetchData = async () => {
      try {
       
        const response = await fetch(`https://www.dbooks.org/api/${query}`);

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
  }, []); */
  //add to cart func
  const addToCart=(data)=>{
    setCartItems([...cartItems,data])


  }
  const getBooks=async()=>{
    query=`/search/${bname}`
    setLoading(true)
    const response = await fetch(`https://www.dbooks.org/api/${query}`);

       try{
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
    }
    const readBook=(number)=>{
      navigate(`/book/id/${number}`)
      
    }
    
  

         
  

  return (
    <>
    <br/>
      <input className="input" type="text" placeholder="serach by name java,python" onChange={(e)=>setbname(e.target.value)}/>&nbsp;&nbsp; 
    <button className='bg-red-500 rounded-lg hover:text-white p-2 cursor-pointer' onClick={getBooks}>Search</button>
   
    <div className=''>
  {loading ? (
    <div className="loader"></div> // Show a loading spinner while data is being fetched
  ) : (
    <div className='flex  flex-wrap gap-2 '>
      {bookData.length > 0 ? (
        bookData.map((book, index) => (
          index !== parseInt(number) && (
            <div
              key={index}
              className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg cursor-pointer"
              onClick={() => readBook(index)}
            >
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
          )
        ))
      ) : (
        <li>No books found</li> // Display message if no books are found
      )}
    </div>
  )}
</div>

    {/*<div className="container">
      
  
        {loading?<div className="loader"></div>:
     
        bookData.length > 0 ? (
          bookData.map((book, index) => (
            {index!=number?<div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"  onClick={()=>readBook(index)}>
            <img class="w-45 h-45" src={book.image}  alt={book.title} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{book.title}</div>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={()=>addToCart(book)}>
  AddToCart
</button>&nbsp; &nbsp;
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={()=>addToCart(book)}>
  Download
</button>
            </div>
            </div>
          ))
        ) : (
          <li>No books found</li>
        )}
     
    </div>*/}
    </>
  );
};




export default Books
