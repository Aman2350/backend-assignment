const express = require('express')
const cors = require('cors')
const app = express()

// const morgan = require("morgan");
// const colors = require("colors");

//*load config from api routes
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

// app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/todo", require("./routes/todoRoutes"));
  

const dbConnect = require("./config/database");
dbConnect();

app.listen(PORT, () => {
    console.log(`App is running Successfully ${PORT}`)
  })    

  app.get("/", (req, res) =>{
    res.send(`<h1> This is the HOMEPAGE  for TASK MANAGER </h1>`);
    
})












    


