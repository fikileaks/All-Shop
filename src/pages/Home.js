import React from 'react'
import heroImage from '../public/home.jpg'
import hewanImage from '../public/hewan.jpg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Link to='/cart'>
        <div className='relative wrapper h-72 rounded-xl my-2 overflow-hidden'>
          <div className='absolute bg-gradient-to-bl from-violet-500 to-pink-500 w-full h-full opacity-30'></div>
          <img src={heroImage} alt='home' className='w-full h-full object-cover' />
          <p className='absolute bottom-[10%] right-[10%] font-bold text-5xl uppercase text-slate-200 shadow-2xl'>Baju</p>
        </div>
      </Link>
      <Link to='/cart'>
        <div className='relative wrapper h-72 rounded-xl my-2 overflow-hidden'>
          <div className='absolute bg-gradient-to-bl from-gray-100 via-orange-300 to-orange-500 w-full h-full opacity-30'></div>
          <img src={hewanImage} alt='home' className='w-full h-full object-cover' />
          <p className='absolute bottom-[10%] right-[10%] font-bold text-5xl uppercase text-slate-200 shadow-2xl'>Hewan</p>
        </div>
      </Link>
    </>
  )
}

export default Home
