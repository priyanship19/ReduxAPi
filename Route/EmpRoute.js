const route = (app) =>{

    const EmployeeController  = require('../Controller/EmpController');

    app.post('/emp/empinsert',EmployeeController.add);
    app.get('/emp/empselect',EmployeeController.getAll);
    app.delete('/emp/empdelete/:id',EmployeeController.deleteOne);

}
module.exports = route;


