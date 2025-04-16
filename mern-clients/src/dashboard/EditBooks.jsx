import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import './SideBar.css';


const EditBooks = () => {
  const {_id} = useParams();
  const {book_title,author_name,image_url,category,book_description,book_pdf_url} = useLoaderData();
  

    const bookCategories = [
      "Fiction", "Horror", "Non-Fiction", "Mystery", "Thriller", "Romance",
      "Historical Fiction", "Business", "Self-Help", "History", "Poetry",
      "Graphic Novel", "Programming", "Children Books", "Travel", "Health",
      "Cooking", "Art", "Science", "Music", "Religion", "Philosophy",
      "Politics", "Bibliography", "Autobiography"
    ];
  
    const [selectedBookCategory, setSelectedCategory] = React.useState(bookCategories[0]);
  
    // Handle Category Change
    const handleChangeSelectedValue = (event) => {
      setSelectedCategory(event.target.value);
    };
  
    // Handle Book Submission
    const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
  
      const updatebookObj = {
        book_title: form.bookTitle.value,
        author_name: form.authorName.value,
        image_url: form.imageUrl.value,
        category: form.category.value,
        book_description: form.bookDescription.value,
        book_pdf_url: form.bookPdfUrl.value
      };
  
      // console.log("Book Details:", bookObj);
      // alert("Book Uploaded Successfully!");
      fetch(`http://localhost:5000/books/${_id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatebookObj)
      
      }).then(res => res.json())
      .then(data => {
        alert("Book is Updated Successfully!!");
       // form.reset();
      });
  
    };
  
    return (
      <div className="px-4 my-12">
        <h2 className="mb-8 text-3xl font-bold">Update the Book Data</h2>
  
        <form onSubmit={handleUpdate} className="flex flex-col lg:w-[1180px] gap-4">
          
          {/* Book Title and Author Name */}
          <div className="flex gap-6">
            <div className="flex-1">
              <Label htmlFor="bookTitle" value="Book Title" className="mb-2 block" />
              <TextInput
                id="bookTitle"
                name="bookTitle"
                type="text"
                placeholder="Enter book name"
                required
                defaultValue={book_title}
                className="w-full h-20 text-xl px-2"
              />
            </div>
  
            <div className="flex-1">
              <Label htmlFor="authorName" value="Author Name" className="mb-2 block" />
              <TextInput
                id="authorName"
                name="authorName"
                type="text"
                defaultValue={author_name}
                placeholder="Enter author name"
                required
                className="w-full h-20 text-xl px-2"
              />
            </div>
          </div>
  
          {/* Book Image and Category */}
          <div className="flex gap-6">
            <div className="flex-1">
              <Label htmlFor="imageUrl" value="Book Image" className="mb-2 block" />
              <TextInput
                id="imageUrl"
                name="imageUrl"
                type="text"
                placeholder="Book image URL"
                required
                defaultValue={image_url}
                className="w-full h-20 text-xl px-2"
              />
            </div>
  
            <div className="lg:w-1/2">
              <Label htmlFor="inputstate" value="Book Category" className="mb-2 block" />
              <select
                id="inputstate"
                name="category"
                value={selectedBookCategory}
                onChange={handleChangeSelectedValue}
                className="w-full px-2 py-2 rounded text-xl"
              >
                {bookCategories.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
  
          {/* Book Description */}
          <div className="flex gap-6">
            <div className="flex-1">
              <Label htmlFor="bookDescription" value="Book Description" className="mb-2 block" />
              <Textarea
                id="bookDescription"
                name="bookDescription"
                placeholder="Write your book description..."
                rows={6}
                required
                defaultValue={book_description}
                className="w-full text-xl px-2"
              />
            </div>
          </div>
  
          {/* Book PDF URL */}
          <div className="flex gap-6">
            <div className="flex-1">
              <Label htmlFor="bookPdfUrl" value="Book PDF URL" className="mb-2 block" />
              <TextInput
                id="bookPdfUrl"
                name="bookPdfUrl"
                type="text"
                placeholder="Book PDF URL"
                required
                defaultValue={book_pdf_url}
                className="w-full h-20 text-xl px-2"
              />
            </div>
          </div>
  
          {/* Upload Button */}
          <Button
            type="submit"
            className="mt-5 text-white bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 hover:bg-blue-700 shadow-md rounded-md flex justify-center items-center text-xl font-semibold transition duration-300"
          >
            Update Book
          </Button>
  
        </form>
      </div>
    );
}

export default EditBooks