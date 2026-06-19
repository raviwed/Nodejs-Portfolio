const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const { mongoDbconnect } = require("./config/dbconnection");
const app = express();

const dotenv = require("dotenv").config();
const Port = 8000;
mongoDbconnect("mongodb://127.0.0.1:27017/Project");
app.use(express.json())
app.use(cors());

app.use('/api/contacts',require("./routes/contactRoutes"));
app.use(errorHandler);



app.listen(Port, () => console.log("Start Server"))

