const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    rollno:{type:String},
    name:{type:String},
    guj:{type:Number},
    eng:{type:Number},
    maths:{type:Number},
    sci:{type:Number},
    ss:{type:Number},
    total:{type:Number},
    per:{type:Number},
    grade:{type:String},
    min:{type:Number},
    max:{type:Number},
})

const resultModel = mongoose.model('result',resultSchema)

module.exports = resultModel;