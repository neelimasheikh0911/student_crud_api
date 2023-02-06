const express=require('express')
const router=express.Router();

const studentController=require('../controller/studentController')

//router.post('/create',upload.single('image'),studentController.createStudent);
router.post('/create',studentController.createStudent);
router.get('/',studentController.allstudentdata);
router.get("/single/:id",studentController.singleStudentData)
router.put("/update/:id",studentController.updateStudentData)
router.delete("/delete/:id",studentController.deleteStudentData)
module.exports=router;



















