const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const dburl = process.env.mongodburl
mongoose.connect(dburl).then(()=>
{
    console.log("connected to mongodbatlas successfully")
}).catch((e)=>{
    console.log(e.message)
});

const app = express();
app.use(express.json());
app.use(cors());
const adminRoutes = require("./routes/adminRoutes");
const facultyRoutes = require("./routes/FacultyRoutes"); 
const studentRoutes = require("./routes/StudentRoutes");
const courseRoutes = require("./routes/CourseRoutes");
app.use("", adminRoutes);
app.use("", facultyRoutes); 
app.use("", studentRoutes);
app.use("", courseRoutes);
const port = 1234;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});