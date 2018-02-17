const mongoose=require('mongoose');
const mongo= require('../Db/DbConnect');
const schema = mongoose.Schema;
const EmployeeSchema=new schema({
    EmpName:{
        type:String
    },
    EmpSalary:{
        type:Number
    },
    EmpDesignation:{
        type:String
    }
});
const Emp = mongoose.model('Employee',EmployeeSchema);
module.exports=Emp;