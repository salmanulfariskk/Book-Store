const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const bookRoute = require('./routes/bookRoute')
const app = express();

const PORT = 5555;

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

const Connection = async () => {
    try {
        const URL = "mongodb://127.0.0.1:27017/BookStore";
        mongoose.set('strictQuery', false);
        await mongoose.connect(URL);
        console.log("Connected to database succesfully.");
    } catch (error) {
        console.log(error);
    }
}

Connection()

//middleware for parsing request body
app.use(express.json())



app.get("/", (req, res) => {
    return res.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books',bookRoute)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
