//Imports
require('dotenv').config()
const express = require("express");
const app = express()
app.use(express.json())


/************************************** * 
* ROUTES CONFIGURATIONS
*****************************************/
//Import Routes
const healthRoutes = require('./routes/index');
const blogpostRoutes = require('./routes/BlogPostRoutes/blogPostRoutes');

//Define Routes
app.use("/", healthRoutes);
app.use("/blogposts", blogpostRoutes);

module.exports = app;