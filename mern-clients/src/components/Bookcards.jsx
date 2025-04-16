import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import '../home/Bookcards.css';

const Bookcards = ({ headline, books }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      {/* cards */}
      <div className='bookcardsswiper mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className='flex flex-col items-center'>
              <Link to={`/books/${book._id}`}>
                <div className='relative'>
                  <img
                    src={book.image_url}
                    alt={book.book_title}
                    className='w-48 h-72 object-cover rounded-lg shadow-md transition-transform hover:scale-105'
                  />
                  <div className='absolute top-2 right-2 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white' />
                  </div>
                </div>
                <div className='text-center mt-3'>
                  <h3 className='text-lg font-semibold'>{book.book_title}</h3>
                  <p className='text-gray-500'>{book.author_name}</p>
                  <p className='text-black font-medium'>₹{book.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Bookcards;
