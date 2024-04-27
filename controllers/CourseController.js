const Course = require('../models/Course'); 
const addcourse = async (req, res) => {
    try 
    {
        const newCourse = new Course(req.body);
        await newCourse.save();
        res.status(200).send("Course Added Successfully")
    } 
    catch (error) 
    {
        res.status(500).send("Filed to add Course details");
    }
}

const getcourse = async (req,res) => {
    try {
        const courseList = await Course.find();
        res.json(courseList);
    } catch (error) {
        console.error('Error fetching course data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deletecourse = async (request, response) => 
 {
    try 
    {
      const ccode = request.params.ccode
      const course = await Course.findOne({"ccode":ccode})
      if(course!=null)
      {
        await Course.deleteOne({"ccode":ccode})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("course Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

module.exports = {addcourse,getcourse,deletecourse};