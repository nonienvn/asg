const express = require("express")
const env = require('dotenv');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


//routes
const userRoutes = require('./routes/index.js')

env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.anekc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once("open", () => {
    console.log("database connected")
})
app.use(express.json());
app.use(cors());
app.get('/ap', (req,res) => {
    res.json({message: "hi"})
})
// mongodb+srv://root:<password>@cluster0.anekc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.use('/api', userRoutes)

app.listen(process.env.PORT, () =>{
    console.log(`server is running on port: ${process.env.PORT}`)
})