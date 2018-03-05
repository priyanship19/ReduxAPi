const EmpModel=require('../ModelEmployee/EmployeeModel');
exports.add=((req,res)=>{
    var emp = new EmpModel({
        EmpName:req.body.EmpName,
        EmpSalary:req.body.EmpSalary,
        EmpDesignation:req.body.EmpDesignation
    })
    emp.save().then((result)=>{
        console.log(result);
        res.status(200).json("Employee Record Inserted"+result);
    }).catch((err)=>{
        res.status(404).json(err);
    })
});
exports.getAll=((req,res)=>{
    EmpModel.find().then((result)=>{
        res.status(200).json(result);
    }).catch((err)=> {
        res.status(404).json(err);
    })
});
exports.upd=(req,res)=>{
    var qur = req.query;
    var id = qur.id;
    EmpModel.findOneAndUpdate({_id:id}, {
        $set:{
            EmpName:req.body.EmpName,
            EmpSalary:req.body.EmpSalary,
            EmpDesignation:req.body.EmpDesignation
        }
    }).then((result)=>{
        res.status(200).json("Employee Record Updated " + result);
    },(err)=>{
        res.status(404).json(err);
    }).catch((err)=>{
        res.status(404).json(err);
    });
}

exports.deleteAll=((req,res)=>{
    EmpModel.delete().then((empl)=>{
        res.status(200).json("Employees Deleted" + empl);
    }).catch((err)=>{
        res.status(404).json(err);
    })
});
exports.deleteOne=((req,res)=>{

    var qur= req.query;
    var id = qur.id;
    EmpModel.deleteOne({_id:id}).then((empl)=>{
            res.status(200).json(empl);
        }).catch((err)=>{
            res.status(404).json(err);
    })
})


