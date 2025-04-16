import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        // Add 5 to each book's stock
        const updatedBooks = data.map(book => ({
          ...book,
          stock: book.stock + 5, 
        }));

        setBooks(updatedBooks);
        const total = updatedBooks.reduce((sum, book) => sum + (book.price * book.stock), 0);
        setTotalValue(total);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Book Store Admin Panel</h1>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-xl shadow">
          <p className="font-bold">Total Books</p>
          <p className="text-xl font-bold">{books.length}</p>
        </div>
        <div className="p-4 bg-green-100 rounded-xl shadow">
          <p className="font-bold">Total Orders</p>
          <p className="text-xl font-bold">45</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-xl shadow">
          <p className="font-bold">Total Value</p>
          <p className="text-xl font-bold">₹{totalValue}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold">Manage Books</h2>
        <div className="mt-3 flex flex-col gap-4">
          {books.map((book) => (
            <div key={book._id} className="p-4 bg-gray-100 rounded-xl shadow">
              <p className="font-bold">Book Title: {book.book_title}</p>
              <p className="text-gray-500">Stock: {book.stock}</p>
              <p className="text-gray-500">Price: ₹{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
