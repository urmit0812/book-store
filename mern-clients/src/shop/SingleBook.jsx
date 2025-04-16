import React, { useEffect, useState, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext'; // Import Cart Context

const SingleBook = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useContext(CartContext); // Use cart context
  const [book, setBook] = useState(location.state?.book || {});
  const [loading, setLoading] = useState(!location.state?.book);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (book._id) return;
    
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5000/books/${id}`);
        if (!response.ok) throw new Error('Book not found');
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id, book]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5000/reviews/${id}`);
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        console.error("Error fetching reviews", err);
      }
    };

    fetchReviews();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-28 px-4 lg:px-24 text-center">
        <h2 className="text-3xl text-blue-600">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-28 px-4 lg:px-24 text-center">
        <h2 className="text-3xl text-red-600">{error}</h2>
        <p>It seems the book you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  // Add book to cart and update count
  const handleAddToCart = () => {
    addToCart(book); // Add book to global cart
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout for ${book.book_title}`);
  };

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <div className='flex flex-col items-center'>
        <h2 className='text-4xl font-bold mb-4'>{book.book_title}</h2>
        <p className='text-xl text-gray-600 mb-2'>by {book.author_name}</p>
        {book.image_url && (
          <img 
            src={book.image_url} 
            alt={book.book_title} 
            className='w-64 h-80 object-cover rounded-lg shadow-md mb-4'
          />
        )}
        <p className='text-lg font-semibold text-green-600'>Price: ₹{book.price}</p>
        <p className='text-md text-gray-700 mt-4 text-center'>{book.book_description}</p>
        
        <div className='flex gap-4 mt-4'>
          <button onClick={handleAddToCart} className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
            Add to Cart
          </button>
          <button onClick={handleBuyNow} className='bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700'>
            Buy Now
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className='mt-12 px-4 lg:px-24'>
        <h3 className='text-2xl font-bold mb-4'>Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className='border p-4 rounded-lg mb-2 shadow-sm'>
              <p className='font-semibold'>{review.username}</p>
              <p className='text-gray-700'>{review.comment}</p>
              <p className='text-yellow-500'>Rating: {review.rating} ★</p>
            </div>
          ))
        ) : (
          <p className='text-gray-500'>No reviews yet. Be the first to review this book!</p>
        )}
      </div>
    </div>
  );
};

export default SingleBook;
