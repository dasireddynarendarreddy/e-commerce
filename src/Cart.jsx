import React, { useContext} from 'react'
import { context } from './App'
function Cart() {
    const {cartItems,setCartItems}=useContext(context)
    console.log(cartItems)
  return (
    <div className="container">
       
        
     
        {cartItems.length > 0 ? (
          cartItems.map((book, index) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-45 h-45" src={book.image}  alt={book.title} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{book.title}</div>
              <button class="bg-red-500  text-white font-bold py-2 px-4 rounded-full cursor-pointer" onClick={()=>setCartItems(cartItems.filter((val,i)=>val.id!=book.id))}>
  Remove
</button>
            </div>
            </div>
          ))
        ) : (
          <h4>No books found</h4>
        )}
     
    </div>
  )
}

export default Cart
