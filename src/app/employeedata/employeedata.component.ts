import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-employee',
  template: `
  <table>
  <tr>
  <th>Employee Id</th>
  <th>Employee Age</th>
  <th>Employee Designation</th>
  </tr>
  <tr *ngFor='let e of emp'>
  <td>{{e.employeeId}}</td>
  <td>{{e.employeeName}}</td>
  <td>{{e.employeeAge}}</td>
  <td>{{e.employeeDesignation}}</td>
  </tr>
  </table>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {
  emp1=new Employee(1,'Jack',20,'SDE');
  emp2=new Employee(2,'Joe',21,'Cloud');
  emp3=new Employee(3,'Jonas',22,'DS');
  emp:Employee[]=[this.emp1,this.emp2,this.emp3]
  constructor() { }

  ngOnInit(): void {
  }
}
