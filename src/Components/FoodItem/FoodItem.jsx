import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/storeContext'

const FoodItem = ({id,name,price,description,image}) => {
    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)


  return (
    <div className='food-item w-full m-auto rounded shadow-2xl'>
    <div className="food-item-img-container mt-5 relative">
        <img className='food-item-image w-full rounded-md' src={image} alt="" />
        {!cartItems[id]
        ? <img className='add w-6 absolute bottom-2 right-2 cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
        :<div className='food-item-counter absolute bottom-1 right-1 flex items-center gap-1 p-1 rounded-full bg-white  '>
          <img className='w-6' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
          <p className='text-xs'>{cartItems[id]}</p>
          <img className='w-6' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>}
    </div>  
    <div className="food-item-info mt-2 px-2">
        <div className="food-item-rating flex justify-between items-center">
            <p className='text-[12px] font-semibold'>{name}</p>
            <img className='w-16' src={assets.rating_starts} alt="" />
        </div>
        <p  className='food-item-desc text-[1.5vw] sm:text-[.9vw]  leading-3 mt-1'>{description}</p>
        <p className='foos-item-price text-[12px] font-semibold mt-1 text-red-400'>${price}</p>
    </div>
    </div>
  )
}

export default FoodItem