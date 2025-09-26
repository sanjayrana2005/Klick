import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'

function Login() {
  return (
    <section className='min-h-screen flex flex-col md:flex-row'>
      {/* bg-image */}
      <img src={assets.bgImage} alt="graident bgImage"
        className='absolute top-0 left-0 -z-1 w-full h-full object-cover'
      />

      {/* left side : branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <img
          src={assets.logo}
          alt="logo image"
          className='h-10 object-contain'
        />
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="group users image"
              className='h-8 md:h-10'
            />
            <div>
              <div className='flex'>
                {Array(5).fill(0).map((_, index) => {
                  return <Star key={index} className='size-4 md:size-4.5 text-transparent fill-amber-500' />
                })}
              </div>
              <p>Used by 12k+ developers</p>
            </div>
          </div>
          <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>More than just friends truly connect</h1>
          <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>connect with global community on klick.</p>
        </div>
        <span className='md:h-10'></span>
      </div>

      {/* login form - right side */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>

      </div>
    </section>
  )
}

export default Login
