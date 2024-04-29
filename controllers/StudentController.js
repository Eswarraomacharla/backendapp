
const Student = require('../models/Student');

const addstudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(200).send("Student Added Successfully");
    } catch (error) {
        res.status(500).send("Failed to add student details");
    }
};

const login = async (req, res) => {
    try {
        const { empId, password } = req.body;
        const student = await Student.findOne({ empId, password });
        
        if (!student) {
            return res.status(404).json({ error: 'Student member not found.' });
        }

        return res.status(200).json({ message: 'Login successful', student });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getstudent = async (req, res) => {
    try {
        const studentList = await Student.find();
        res.json(studentList);
    } catch (error) {
        console.error('Error fetching student data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deletestudent = async (request, response) => 
 {
    try 
    {
      const studentId = request.params.studentId
      const student = await Student.findOne({"studentId":studentId})
      if(student!=null)
      {
        await Student.deleteOne({"studentId":studentId})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("student Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const updatestudent = async (req, res) => {
    try {
        const studentId = req.params.studentId;
        const updatedData = req.body;

        const student = await Student.findOne({ "studentId": studentId });
        if (student != null) {
            for (let key in updatedData) {
                if (student[key] !== undefined) {
                    student[key] = updatedData[key];
                }
            }
            await student.save();
            res.send("Updated Successfully");
        } else {
            res.send("Faculty Not Found");
        }
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).send(error.message);
    }
};

const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const studentId = req.user.studentId; 
  
    try {
      const student = await Student.findOne({ studentId });
  
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      if (student.password !== currentPassword) {
        return res.status(401).json({ error: 'Incorrect current password' });
      }
  
      student.password = newPassword;
      await student.save();
  
      return res.json({ success: true, message: 'Password changed successfully' });
    } catch (error) {
      console.error('Error changing password:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
  


module.exports = { addstudent, getstudent, deletestudent, updatestudent,login,changePassword};
