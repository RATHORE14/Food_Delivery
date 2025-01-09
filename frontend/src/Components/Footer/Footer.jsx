import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] mt-10  bg-[#323232] flex flex-col items-center gap-2 p-3' id='footer'>

        <div className="footer-content w-[80%] m-auto flex flex-col sm:flex-row md:flex-row lg:flex-row gap-8 mt-5 ">
            <div className="footer-content-left flex flex-col items-start gap-2">
                <img className='w-32' src={assets.logo} alt="" />
                <p className='text-[2vw] sm:text-[1vw] font-lg text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor autem accusamus facilis ex id!</p>
                <div className="footer-social-icons grid grid-cols-3 gap-2 w-24">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center flex flex-col items-start gap-2">
            <h2 className='text-lg font-medium text-white'>COMPANY</h2>
            <ul className='text-xs cursor-pointer'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privecy Policy</li>
            </ul>
            </div>
            <div className="footer-content-right flex flex-col items-start gap-2">
                <h2 className='text-lg text-white font-medium'>Get In Touch</h2>
                <ul className='text-xs cursor-pointer'>
                    <li>+91-758107287</li>
                    <li>rathoremyank643@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[80%] h-[1px] m-auto mt-5 bg-gray-400 border-none ' />
        <p className='footer-copyright mt-5 text-sm text-white w-72 sm:w-[100%] text-center'>Copyright 2025 @ Tomato.com - All Right Reserved.</p>
       
    </div>
  )
}

export default Footer