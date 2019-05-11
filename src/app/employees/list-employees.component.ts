import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreferece: 'Email',
      email: 'mark@seematech.com',
      dateOfBirth: new Date('12/21/1987'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/images.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreferece: 'Phone',
     phoneNumber: 5478865435,
      dateOfBirth: new Date('10/11/1997'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/download.png'
    },
    {
      id: 3,
      name: 'Vivek',
      gender: 'Male',
      contactPreferece: 'Phone',
     phoneNumber: 9035001527,
      dateOfBirth: new Date('1/21/1977'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/download.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
