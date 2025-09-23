import React from 'react'
import { assets } from '../assets/assets'

function Login() {
  return (
    <section className='min-h-screen'>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
