const resultModel = require('../Module/resultModel');
const { search } = require('../routes');

exports.addResult = async (req, res) => {
    try {
        const { rollno, name, guj, eng, maths, sci, ss } = req.body
        var total = parseFloat(guj) + parseFloat(eng) + parseFloat(maths) + parseFloat(sci) + parseFloat(ss);
        var per = (total * 100 / 500).toFixed(2);
        var grade;
        if (per > 70) {
            grade = "First";
        }
        else if (per > 60) {
            grade = "second";
        }
        else if (per > 40) {
            grade = "Third";
        }
        else {
            grade = "Fail"
        }

        var max = Math.max(guj, eng, maths, sci, ss)
        var min = Math.min(guj, eng, maths, sci, ss)
        var obj = {
            rollno: rollno,
            name: name,
            guj: guj,
            eng: eng,
            maths: maths,
            sci: sci,
            ss: ss,
            total: total,
            per: per,
            grade: grade,
            max: max,
            min: min
        }

        const data = await resultModel.create(obj)
        res.status(200).json({
            status: "Add Student Result Successfully",
            data
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Something Wrong in your API",
            error: err.message
        })
    }
}

exports.getResult = async (req, res) => {
    try {

        const data = await resultModel.find()
        res.status(200).json({
            status: "Get All Student Result Successfully",
            data
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Something Wrong in your API",
            error: err.message
        })
    }
}

exports.getsingleResult = async(req,res) => {
    try {
        const id = req.query.id;
        const data = await resultModel.findById(id)
        res.status(200).json({
            status: "Get All Student Result Successfully",
            data
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Something Wrong in your API",
            error: err.message
        })
    } 
}

exports.updateResult = async (req, res) => {

    const id = req.body.id
    const { rollno, name, guj, eng, maths, sci, ss } = req.body
    var total = parseFloat(guj) + parseFloat(eng) + parseFloat(maths) + parseFloat(sci) + parseFloat(ss);
    var per = total * 100 / 500;
    var grade;
    if (per > 70) {
        grade = "First";
    }
    else if (per > 60) {
        grade = "second";
    }
    else if (per > 40) {
        grade = "Third";
    }
    else {
        grade = "Fail"
    }

    var max = Math.max(guj, eng, maths, sci, ss)
    var min = Math.min(guj, eng, maths, sci, ss)
    var obj = {
        rollno: rollno,
        name: name,
        guj: guj,
        eng: eng,
        maths: maths,
        sci: sci,
        ss: ss,
        total: total,
        per: per,
        grade: grade,
        max: max,
        min: min
    }

    const data = await resultModel.findByIdAndUpdate(id ,obj, {new:true})
    res.status(200).json({
        status: "Update Student Result Successfully",
        data
    })
}

exports.deleteResult = async(req,res) => {
    
    try {
        const id = req.params.id;
        const data = await resultModel.findByIdAndDelete(id)
        res.status(200).json({
            status: "Delete Student Result Successfully",
           
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Something Wrong in your API",
            error: err.message
        })
    }
}

exports.searchResult = async(req,res) => {

    var search = req.query.search;
    var regex = new RegExp(search,"i");
    var data = await resultModel.find({name:{$regex:regex}})
    res.status(200).json({
        status: "Add search Result Found Successfully",
        data
    })
} 