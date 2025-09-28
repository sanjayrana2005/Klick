import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems'

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate()
  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 ${sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"} transition-all duration-300 ease-in-out`}>
      <div className='w-full'>
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt="Klcik logo"
          className='w-26 h-20 ml-15 my-2 cursor-pointer'
        />
        <hr className='border-gray-200 mb-8' />
        <MenuItems setSidebarOpen={setSidebarOpen} />

      </div>
    </div>
  )
}

export default Sidebar
