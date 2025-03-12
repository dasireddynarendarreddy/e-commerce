import { useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import Books from './Books'
import './App.css'
import Home from './Home'
import Nav from './Nav'
import Cart from './Cart'
import Read from './Read'
import './Nav.css'
import { createContext, useState } from 'react'
export const context=createContext();
function App() {
  const[cartItems,setCartItems]=useState([])
   const [bookData, setBookData] = useState([]); // Initialize state
    const[loading,setLoading]=useState(true)
  useEffect(() => {
      
      const fetchData = async () => {
        try {
         
          const response = await fetch('https://www.dbooks.org/api/recent');
  
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

  return (
    <>
    
    <context.Provider value={{cartItems,setCartItems,loading,bookData,setLoading,setBookData}}>
    <Nav/>
    
     <Routes>

      <Route path='' element={<Home/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path={'/book/id/:number'} element={<Read/>}/>
     </Routes>
     </context.Provider>
       
    </>
  )
}

export default App
