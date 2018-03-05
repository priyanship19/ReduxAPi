const route = (app) =>{

    const EmployeeController  = require('../Controller/EmpController');

    app.post('/emp/empinsert',EmployeeController.add);
    app.get('/emp/empselect',EmployeeController.getAll);
    app.delete('/emp/empdelete',EmployeeController.deleteOne);
    app.put('/emp/empupdate',EmployeeController.upd);

}
module.exports = route;


