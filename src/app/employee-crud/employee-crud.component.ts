import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCrudComponent implements OnInit {

  title='Account CRUD Application'

  employees:any[];

  employee:any;

  message="";


  add=false;
  save=false;

  constructor(private es:EmployeeService) {
    console.log("EmployeeCrudComponent created...")
   }

   ngOnInit() {
    this.getAllEmployee();
    console.log("EmployeeCrudComponent initialized...")
  }

  ngOnDestroy() {
    console.log("AccountCrudComponent destroyed...")
  }

  newEmployee(){
    this.add=false;
    this.save=true; 
this.employee={
  id:0,
  name:'',
  salary:0.0,
  email:'',
  mobile:'',
  doj:new Date()
}

  }

  getAllEmployee(){

    this.es.getAllEmployee()
           .subscribe(response=>this.employees=response,
                       error=>this.message=error);

  }

  getEmployeeById(id:number){

    this.es.getEmployeeById(id)
           .subscribe(response=>this.employee=response,
                       error=>this.message=error);

  
   this.add=true;
   this.save=false;                    

  
                      }

   deleteEmployeeById(id:number){

                        this.es.deleteEmployeeById(id)
                               .subscribe(response=>this.employees=response,
                                           error=>this.message=error);
                    
    }

    updateEmployeeById(id:number){

      this.es.updateEmployeeById(id,this.employee)
             .subscribe(response=>this.employees=response,
                         error=>this.message=error);
  
                         this.employee=null;
                         
    }
    addEmployee(){

      this.es.addEmployee(this.employee)
             .subscribe(response=>this.employees=response,
                         error=>this.message=error);
  
  
                         this.employee=null;
  
    }

}
