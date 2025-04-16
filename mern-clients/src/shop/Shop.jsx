

import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import '../dashboard/SideBar.css';

export const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data); // Save the fetched books to state
      })
      .catch((err) => console.error('Error fetching books:', err));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10'>All Books are Here</h2>

      <div className='grid my-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {books.map((book, index) => (
          <Card 
            key={book.id || book._id || index} 
            className="max-w-sm"
            data-testid="flowbite-card" // Ensure data-testid attribute is there
          >
            <img 
              src={book.image_url} 
              alt={book.book_title} 
              className="w-full h-auto rounded-none" 
            />
            <h5 className='text-2xl font-bold tracking-tight text-gray-900'>
              {book.book_title}
            </h5>
            <p className='font-normal text-gray-700'>
              Here are the biggest enterprise technology acquisitions of 2024 so far, in reverse chronological order.
            </p>
            <button className='bg-blue-700 px-5 py-2 text-white stick-bottom font-semibold hover:bg-black transition-all ease-in-out duration-300 rounded'>
              Buy Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
