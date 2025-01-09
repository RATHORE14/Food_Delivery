import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-Menu flex flex-col gap-2 ' id='explore-Menu'>
         <h1 className='text-md font-medium text-[#262626] mt-5 sm:text-3xl md:text-3xl lg:text-3xl'>Explore our menu</h1>
         <p className='text-[1vw] leading-2 mb-2 max-w-[60%] text-[#808080] explore-menu-text'>Choose from a diverse menu featuring a deletable array of dishes crafted with the finest ingredient and culinary experties. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
         <div className="explore-menu-list flex justify-between items-center gap-4 text-center mx-2 overflow-x-auto">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All': item.menu_name)} key={index} className="explore-menu-list-item ">
                        <img  className={category===item.menu_name?"active":''} src={item.menu_image} alt="" />
                        <p className='text-sm mt-1 text-[#747474]'>{item.menu_name}</p>
                    </div>
                )
            })}
         </div>
         <hr className='h-[0.1vw] mt-5 mb-5 bg-zinc-600 mx-1 border-none' />
    </div>
  )
}

export default ExploreMenu