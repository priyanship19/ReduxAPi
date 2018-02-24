const EmpModel=require('../ModelEmployee/EmployeeModel');
exports.add=((req,res)=>{
    var emp = new EmpModel({
        EmpName:req.body.EmpName,
        EmpSalary:req.body.EmpSalary,
        EmpDesignation:req.body.EmpDesignation
    })
    emp.save().then((result)=>{
        res.json("Employee Record Inserted"+result);
    }).catch((err)=>{
        res.json(err);
    })
});
exports.getAll=((req,res)=>{
    EmpModel.find().then((result)=>{
        res.json("Employee Record Displayed"+result);
    }).catch((err)=> {
        res.json(err);
    })
});
exports.upd=(req,res)=>{
    EmpModel.findOneAndUpdate({_id:req.params.id}, {
        $set:{
            EmpName:req.body.EmpName,
            EmpSalary:req.body.EmpSalary,
            EmpDesignation:req.body.EmpDesignation
        }
    }).then((result)=>{
        res.json("Employee Record Updated " + result);
    },(err)=>{
        res.json(err);
    }).catch((err)=>{
        res.json(err);
    });
}

exports.deleteAll=((req,res)=>{
    EmpModel.delete().then((empl)=>{
        res.send("Employees Deleted");
    }).catch((err)=>{
        res.send(err);
    })
});
exports.deleteOne=((req,res)=>{

    var qur=req.query;
    var id = qur.id;
    EmpModel.deleteOne({_id:id},(empl,err)=>{
        if(err)
        {
            res.send(err);
        }
        res.send(empl);
    })
})