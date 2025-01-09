import React, { useContext } from 'react'
import { StoreContext } from '../../Context/storeContext'

const PlaceOrder = () => {

  const{getTotalCartAmount} = useContext(StoreContext)
  return (
   <form className='place-order flex flex-col sm:flex-row items-start justify-between gap-20 mt-10 '>
     <div className="place-order-left w-[100%]">
      <p className='title text-lg font-semibold mb-5'>Deliver Information</p>
      <div className="multi-fields flex gap-1">
        <input className='border-2' type="text" placeholder='First Name'  />
        <input className='border-2' type="text" placeholder = 'Last Name'  />
      </div>
      <input className='border-2' type="email" placeholder='Email address' />
      <input className='border-2' type="text" placeholder='Street' />
      <div className="multi-fields flex gap-1">
        <input className='border-2' type="text" placeholder='City'  />
        <input className='border-2' type="text" placeholder='State'  />
      </div>
      <div className="multi-fields flex gap-1">
        <input className='border-2' type="text" placeholder='Zip Code'  />
        <input className='border-2' type="text" placeholder='Country'  />
      </div>
      <input className='border-2' type="text" placeholder='Phone' />
     </div>
     <div className="place-order-right w-[100%] max-w-96 mt-4">
       <div className="cart-total flex-1 flex-col ">
          <h2 className="font-semibold text-sm ">Cart Total</h2>
          
          <div className="cart-total-details flex justify-between text-[#555]">
            <p className="text-sm mt-5">Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="mt-1" />
          <div className="cart-total-details  flex justify-between text-[#555]">
            <p className="text-sm">Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details  flex justify-between text-[#555]">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0 :  getTotalCartAmount()+2}</b>
          </div>
        <button  className="border-none text-white bg-red-500 w-44 text-sm mt-5 cursor-pointer p-2 rounded-md">Proceed To Payment</button>
        </div>
     </div>
   </form>
  )
}

export default PlaceOrder