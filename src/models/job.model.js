const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min: 0
        
    },
    location:{
        type:String,
        required:true
    },

    createdby:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'User',
       required:true,

    }
},{ timestamps: true })



const jobModel = mongoose.model("Job" , jobSchema);


module.exports = jobModel

