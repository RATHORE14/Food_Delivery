import React, { useContext } from 'react'
import { StoreContext } from '../../Context/storeContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display mt-2'>
           <h2 className='font-medium sm:text-3xl md:text-3xl lg:text-3xl'>Top Dishes near you</h2>
           <div className="food-display-list grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 ">
            {food_list.map((item,index)=>{
                if(category==="All" || category === item.category){

                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
           </div>
    </div>
  )
}

export default FoodDisplay