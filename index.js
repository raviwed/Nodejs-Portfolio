const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const app = express();

const dotenv = require("dotenv").config();
const Port = 8000;

app.use(express.json())
app.use(cors());

app.use('/api/contacts',require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(Port, () => console.log("Start Server"))


