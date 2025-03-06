
import {Routes,Route} from 'react-router-dom'
import Books from './Books'
import './App.css'
import Home from './Home'
import Nav from './Nav'
import Cart from './Cart'
import { createContext, useState } from 'react'
export const context=createContext();
function App() {
  const[cartItems,setCartItems]=useState([])

  return (
    <>
    
    <context.Provider value={{cartItems,setCartItems}}>
    <Nav/>
     <Routes>

      <Route path='' element={<Home/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     </context.Provider>
       
    </>
  )
}

export default App
