const mongoose=require('mongoose')

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
email:{
    type:String,
    required:true
},

class:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
image:{
    type:String,
    require:false
}

})
const Student=mongoose.model('STUDENT',studentSchema);
module.exports=Student;