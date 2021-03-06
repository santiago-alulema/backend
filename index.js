const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./server/routes/pirata.routes");
AllMyUserRoutes(app);
app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });
  
app.listen(5000, () => console.log("The server is all fired up on port 8000"));

module.exports = app;