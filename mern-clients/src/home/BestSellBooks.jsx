import React from 'react'
import { useState, useEffect } from 'react'                         
import Bookcards from '../components/Bookcards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([])

      useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBooks(data.slice(0,8)); // Save the fetched books to state
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);
  return (
    <div>
      <Bookcards books={books} headline=" Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks;