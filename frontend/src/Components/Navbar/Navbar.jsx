import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/storeContext'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu")
    const{getTotalCartAmount} = useContext(StoreContext)


  return (
    <div className='navbar py-4 flex justify-between  items-center '>
       <Link to='/'> <img src={assets.logo} alt="" className="logo w-[100px] sm:w-[150px] md:w-[150px]" /></Link>
        <ul className="navbar-menu flex gap-20 text-[#49557e] text-sm hidden sm:contents md:contents ">
            <Link to='/' onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-Menu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={()=>{setMenu("mobile app")}} className={menu==="mobile app"?"active":""}>mobile app</a>
            <a href='#footer' onClick={()=>{setMenu("contact us")}} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right flex items-center gap-5">
           <img className='w-4 sm:w-5 md:w-6 lg:w-6' src={assets.search_icon} alt="" />
            <div className="navbar-search-icon relative w-4 sm:w-5 md:w-6 lg:w-6">
            <Link to="/cart"> <img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":'dot absolute min-w-2 min-h-2 rounded-full top-0 right-[-5px] bg-red-400'}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className='bg-transparent text-xs text-[#49557e] border border-red-600 px-5 py-2 rounded-full cursor-pointer hover:bg-red-500 transition-all'>sign In</button>
        </div>
    </div>
  )
}

export default Navbar