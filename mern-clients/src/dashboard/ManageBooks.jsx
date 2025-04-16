import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import "flowbite/dist/flowbite.min.css"; 
import { Link } from 'react-router-dom';
import './ManageBooks.css';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/all-books')
      .then(res => res.json())
      .then(data => {
        setAllBooks(data);
      });
  }, []);

  // Delete a book
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/books/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (response.ok) {
        alert("Book deleted successfully");
        setAllBooks(allBooks.filter(book => book._id !== id));
      } else {
        alert(`Failed to delete the book: ${result.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-black'>Manage Your Books</h2>

      {/* Table for books */}
      <Table hoverable={true} className="table bg w-full text-sm text-gray-700">
        <Table.Head className="table-header">
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row className="bg-white hover:bg-cyan-50" key={book._id}>
              <Table.Cell className="table-text">{index + 1}</Table.Cell>
              <Table.Cell className="table-text">{book.book_title}</Table.Cell>
              <Table.Cell className="table-text">{book.author_name}</Table.Cell>
              <Table.Cell className="table-text">{book.category}</Table.Cell>
              <Table.Cell className="table-text">₹{book.price}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 dark:text-cyan-500 hover:underline mr-5"
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className='delete-btn'
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageBooks;
// import React, { useState, useEffect } from "react";
// import { Table } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const ManageBooks = () => {
//   const [books, setBooks] = useState([]);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [userEmail, setUserEmail] = useState("");

//   useEffect(() => {
//     const auth = getAuth();
    
//     // Listen for auth state changes
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setUserEmail(user.email); // Set user email

//         // Get user token and check admin role
//         const tokenResult = await user.getIdTokenResult();
//         setIsAdmin(tokenResult.claims.role === "admin"); // Assuming custom claims
//       } else {
//         setUserEmail("");
//         setIsAdmin(false);
//       }
//     });

//     return () => unsubscribe(); // Cleanup listener
//   }, []);

//   useEffect(() => {
//     if (!userEmail) return;

//     fetch(`http://localhost:5000/all-books?email=${userEmail}`)
//       .then((res) => res.json())
//       .then((data) => setBooks(data));
//   }, [userEmail]);

//   // Delete a book
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/books/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         alert("Book deleted successfully");
//         setBooks(books.filter((book) => book._id !== id));
//       } else {
//         alert("Failed to delete the book");
//       }
//     } catch (error) {
//       console.error("Error deleting book:", error);
//     }
//   };

//   return (
//     <div className="px-4 my-12">
//       <h2 className="mb-8 text-3xl font-bold text-black">Manage Your Books</h2>

//       <Table hoverable={true} className="table bg w-full text-sm text-gray-700">
//         <Table.Head className="table-header">
//           <Table.HeadCell>No.</Table.HeadCell>
//           <Table.HeadCell>Book Name</Table.HeadCell>
//           <Table.HeadCell>Author Name</Table.HeadCell>
//           <Table.HeadCell>Category</Table.HeadCell>
//           <Table.HeadCell>Prices</Table.HeadCell>
//           <Table.HeadCell>Edit or Manage</Table.HeadCell>
//         </Table.Head>
//         <Table.Body className="divide-y">
//           {books.map((book, index) => (
//             <Table.Row className="bg-white hover:bg-cyan-50" key={book._id}>
//               <Table.Cell className="table-text">{index + 1}</Table.Cell>
//               <Table.Cell className="table-text">{book.book_title}</Table.Cell>
//               <Table.Cell className="table-text">{book.author_name}</Table.Cell>
//               <Table.Cell className="table-text">{book.category}</Table.Cell>
//               <Table.Cell className="table-text">₹{book.price}</Table.Cell>
//               <Table.Cell>
//                 <Link
//                   className="text-cyan-600 hover:underline mr-5"
//                   to={`/admin/dashboard/edit-books/${book._id}`}
//                 >
//                   Edit
//                 </Link>
//                 {isAdmin && (
//                   <button onClick={() => handleDelete(book._id)} className="delete-btn">
//                     Delete
//                   </button>
//                 )}
//               </Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//     </div>
//   );
// };

// export default ManageBooks;
