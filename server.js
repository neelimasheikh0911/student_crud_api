const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const path = require('path')
const bodyParser = require("body-parser");
const app = express();

//The body-parser middleware to parse form data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//directory name
app.use(express.static(path.join(__dirname,'upload')))

//FOR FILE UPLOAD, BELOW ARE SOME STEPS  TO BE FOLLOWED

//step 1 fileupload [define static folder]
app.use('/upload',express.static(path.join(__dirname,'upload')));


//step2
const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

//step 3 file type
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.includes("png") ||
    file.mimetype.includes("jpg") ||
    file.mimetype.includes("jpeg")){
        cb(null,true)
    }
    else{
        cb(null,false)
    }    
} 
//step 4 file upload
app.use(multer({storage:fileStorage,fileFilter:fileFilter,limits:{fieldSize:1024*1024*5}}).single('image'))

//DEFINE ROUTE  

const Route=require('./route/studentRoute')
app.use('/api',Route);


//MONGOOSE CONNECTION

const dbDriver = "mongodb+srv://nilima4567:6ab6YjldIkRVGW69@cluster0.l5aiux7.mongodb.net/student_api";

const port = process.env.PORT || 4000
console.log('hello')

mongoose.connect(dbDriver, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server & DB connected, listening on PORT http://localhost:${port}`)
        })
    })
    .catch(error => {
        console.log(`Server error: ${error}`)
    })
    
