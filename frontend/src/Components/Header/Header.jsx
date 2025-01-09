import React from 'react'

const Header = () => {
  return (
    <div className='header h-[35vw] mx-auto my-auto relative'>
         <div className="header-contents absolute flex flex-col items-start  max-w-[50%] bottom-5 left-4 animate-pulse sm:bottom-7 lg:bottom-7 md:bottom-7">
           <h1 className='text-sm w-[32vw] leading-none font-medium text-white sm:text-5xl md:text-5xl lg:text-5xl lg:w-[40vw]  '>Order your favorite food here</h1>
            <p className='text-[1vw] leading-2  mt-1 mb-1 text-white sm:mt-3 md:mt-3 lg:mt-3'>Choose from a diverse menu featuring a deletable array of dishes crafted with the finest ingredient and culinary experties. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            <button className='border-none font-medium py-1 px-3 bg-white text-[1vw]  rounded-full sm:mt-3 md:mt-3 lg:mt-3'>View Menu</button>
         </div>
    </div>
  )
}

export default Header