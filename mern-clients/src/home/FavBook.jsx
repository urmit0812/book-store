import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='my-20 px-4 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12 ' />
        </div>
        <div className='md:w-1/2 space-y-6'>
             <h2 className='text-5xl font-bold my-5 md:w-3/4'>Find Your Favourite <span 
             className='text-blue-700'>Book Here!</span></h2>
             <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi minus architecto dicta ducimus consequatur veniam, delectus illo omnis eaque tempora facilis modi eum ipsa dolor debitis alias porro asperiores.</p>
             {/* stats */}
             <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold' >800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold' >550+</h3>
                    <p className='text-base'> Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold' >1200+</h3>
                    <p className='text-base'>PDF Download</p>
                </div>

             </div>
             {/* button */}
             <Link to="./shop" className='mt-12 block'><button className='bg-blue-700 px-5 py-2 text-white font-semibold hover:bg-black transition-all ease-in-out duration-300 rounded'>Explore More</button></Link>

        </div>
    </div>
  )
}

export default FavBook