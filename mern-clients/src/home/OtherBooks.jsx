import React, { useEffect, useState } from 'react'
import Bookcards from '../components/Bookcards'

const OtherBooks = () => {
   const [books, setBooks] = useState([])

      useEffect(() => {
        fetch('http://localhost:5000/all-books')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBooks(data.slice(5,20)); // Save the fetched books to state
            })
            .catch(error => console.error('Error fetching books:', error));
    }, []);
  return (
    <div>
      <Bookcards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks