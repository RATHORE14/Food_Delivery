import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download m-auto mt-20 text-3xl font-semibold text-center' id='app-download'>
          <p>For Better Experience Download <br /> Tomato App</p>
          <div className="app-download-platforms flex justify-center gap-4 mt-5">
            <img className='w-36 hover:scale-105 cursor-pointer transition ' src={assets.play_store} alt="" />
            <img className='w-36 hover:scale-105 cursor-pointer transition ' src={assets.app_store} alt="" />
          </div>
    </div>
  )
}

export default AppDownload