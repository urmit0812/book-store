require('dotenv').config();
const path = require("path");
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// Middleware
app.use(cors({
  origin: "*", // Allow all origins (or specify your frontend URL)
  methods: ["GET", "POST", "DELETE", "PATCH"], // Include DELETE and PATCH
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// MongoDB Client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function startServer() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const bookCollections = client.db("BookInventory").collection("book");

    // Routes
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });

    // Upload book
    app.post("/upload-books", async (req, res) => {
      try {
        const book = req.body;
        if (!book || Object.keys(book).length === 0) {
          return res.status(400).json({ message: "Invalid book data" });
        }
        const result = await bookCollections.insertOne(book);
        res.status(201).json(result);
      } catch (error) {
        console.error("Error uploading book:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // Update a book
    app.patch("/books/:id", async (req, res) => {
      const id = req.params.id;
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ObjectId format" });
      }
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = { $set: { ...updateBookData } };
      try {
        const result = await bookCollections.updateOne(filter, updateDoc);
        if (result.matchedCount === 0) {
          return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book updated successfully", result });
      } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Delete a book
    app.delete("/books/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Deleting book with ID:", id); // Debugging
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ObjectId format" });
      }
      try {
        const filter = { _id: new ObjectId(id) };
        const result = await bookCollections.deleteOne(filter);
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Book not found" });
        }
        res.json({ message: "Book deleted successfully", result });
      } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // // Get all books
    app.get("/all-books", async (req, res) => {
      try {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
        const books = await bookCollections.find(query).toArray();
        res.send(books);
      } catch (error) {
        console.error("Error retrieving books:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });


   
    // Get single book
    app.get("/books/:id", async (req, res) => {
      const id = req.params.id;
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ObjectId format" });
      }
      try {
        const query = { _id: new ObjectId(id) };
        const book = await bookCollections.findOne(query);
        if (!book) {
          return res.status(404).json({ error: "Book not found" });
        }
        res.send(book);
      } catch (error) {
        console.error("Error retrieving book:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}
const __dirname1= path.resolve();


if(process.env.NODE_ENV=="development"){
  console.log("Reached here");
  app.use(express.static(path.join(__dirname1,"/mern-clients/dist")));
  console.log("\n\n\n\n");
  console.log(__dirname1);
  console.log("\n\n\n\n");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname1,"mern-clients","dist","index.html"))
  })
  console.log("Inside deployment code");

}else{
  app.get('/',(req,res)=>{
    res.send("Welcome to managehub !!!");
  })
}
// --------------------- deployment ------------------------
startServer();
