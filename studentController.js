const studentModel=require('../model/studentModel')


//CREATE STUDENTS DATA
exports.createStudent = async (req, res) => {
    try {
      const studentdetails = await new studentModel({
        name: req.body.name,
        email: req.body.email,
        class: req.body.class,
        address: req.body.address,
        image: req.file.filename,
       
      });
      const data = await studentdetails.save();
      
      res.status(200).send({ status: true, msg: "Student data save", result: data });
    } catch (error) {
      res.status(400).send({ 
        status: false, 
        msg: "data no added,please recheck you code!",
      result:error
     });
    }
  };

  //FETCH ALL DATA

exports.allstudentdata = async (req, res) => {
    try {
      const data = await studentModel.find();
      res.status(200).send({ status: true, msg: "student data", result: data });
    } catch (error) {
      res.status(404).send({ status: false, msg: "something went wrong" });
    }
  };

  //FETCH  SINGLE DATA

  exports.singleStudentData = async (req, res) => {
    try {
      const data = await studentModel.findById({ _id: req.params.id });
      res.status(200).send({ status: true, msg: "studend data", result: data });
    } catch (error) {
      res.status(404).send({ status: false, msg: "something went wrong" });
    }
  };

//UPDATE STUDENT DATA

exports.updateStudentData=async(req,res)=>{
    
  try{
    const data = await studentModel.findById({ _id: req.params.id });
  data.name=req.body.name;
  data.email=req.body.email;
  data.class=req.body.class;
  data.address=req.body.address;
   data.image=req.body.image
  data.save()
  console.log(data);
  res
    .status(200).send({ status: true, msg: "Student updated", result: data });
} catch (error) {
  res.status(404).send({ status: false, msg: "something went wrong" });
}
}
  
//DELETE SINGLE DATA
exports.deleteStudentData = async (req, res) => {
    try {
      const data = await studentModel.findByIdAndDelete({ _id: req.params.id });
      
      return res.status(200).json({msg: "delete succesfully",result: data})
    } catch (error) {
      res.status(400).send({ status: false, msg: "somethig went wrong" });
    }
  };

  