const Faculty = require('../models/Faculty');

const addfaculty = async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        await newFaculty.save();
        res.status(200).send("Faculty Added Successfully");
    } catch (error) {
        res.status(500).send("Failed to add faculty details");
    }
};

const login = async (req, res) => {
    try {
        const { empId, password } = req.body;
        const faculty = await Faculty.findOne({ empId, password });
        
        if (!faculty) {
            return res.status(404).json({ error: 'Faculty member not found.' });
        }

        return res.status(200).json({ message: 'Login successful', faculty });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getfaculty = async (req,res) => {
    try {
        const facultyList = await Faculty.find();
        res.json(facultyList);
    } catch (error) {
        console.error('Error fetching faculty data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deletefaculty = async (request, response) => 
 {
    try 
    {
      const facultyId = request.params.facultyId
      const faculty = await Faculty.findOne({"facultyId":facultyId})
      if(faculty!=null)
      {
        await Faculty.deleteOne({"facultyId":facultyId})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("faculty Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const updatefaculty = async (req, res) => {
    try {
        const facultyId = req.params.facultyId;
        const updatedData = req.body;

        const faculty = await Faculty.findOne({ "facultyId": facultyId });
        if (faculty != null) {
            for (let key in updatedData) {
                if (faculty[key] !== undefined) {
                    faculty[key] = updatedData[key];
                }
            }
            await faculty.save();
            res.send("Updated Successfully");
        } else {
            res.send("Faculty Not Found");
        }
    } catch (error) {
        console.error('Error updating faculty:', error);
        res.status(500).send(error.message);
    }
};

module.exports = { addfaculty, getfaculty,deletefaculty,updatefaculty,login }; 


