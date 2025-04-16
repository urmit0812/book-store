import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 md:px-16 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* Left Side */}
        <div className='md:w-1/2 space-y-6 h-full text-left'>
          <h2 className='text-5xl font-bold leading-snug text-black'>
            Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span>
          </h2>
          <p className='text-gray-600 text-lg md:w-4/5'>
            Easily buy and sell books with our seamless platform. Browse a vast collection, get the best prices, and manage your inventory effortlessly. Whether you're a reader or a seller, our smart system ensures a smooth and efficient experience.
          </p>
          <div className='flex items-center gap-2'>
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder='Search a book' 
              className='py-2 px-4 rounded-l-md outline-none border border-gray-300 bg-amber-50'
            />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-r-md'>
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2'>
          <BannerCard></BannerCard>
        </div>
      </div>
    </div>
  )
}

export default Banner
