import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Avatar from Flowbite
import { Avatar } from "flowbite-react";

// React icons
import { FaStar } from 'react-icons/fa6';
import proPic from "../assets/profile.jpg";

// Import Avatar from Flowbite
// import { Avatar } from "flowbite-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../home/Bookcards.css';

// Import required Swiper modules
import { Pagination } from 'swiper/modules';

// Review data for dynamic rendering
const reviews = [
  {
    id: 1,
    name: "Urmit Patel",
    position: "CEO, BrandedStuff Pvt. Ltd.",
    feedback: "Absolutely loved the attention to detail and the creativity involved in the project.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    position: "Manager, XYZ Ltd.",
    feedback: "Amazing service and top-notch quality. Truly impressed with the professionalism and dedication!",
    rating: 5,
  },
  {
    id: 3,
    name: "Lisa Ray",
    position: "CTO, TechCorp",
    feedback: "Great experience overall! Highly recommend their services to anyone looking for quality work.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ava Lee",
    position: "Founder, Startup Hub",
    feedback: "Absolutely loved the attention to detail and the creativity involved in the project.",
    rating: 5,
  },
];

const Review = () => {
  return (
    <div className='reviewcardswiper my-20 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500'>
                {Array.from({ length: review.rating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              {/* Review Text */}
              <div className='mt-7'>
                <p className='mb-5 text-gray-900 font-medium'>{review.feedback}</p>
                <Avatar alt={`Avatar of ${review.name}`} img={proPic} rounded className='w-8 h-8 mb-4' />
                <h5 className='text-lg font-medium'>{review.name}</h5>
                <p className='text-base text-gray-900 font-medium'>{review.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
