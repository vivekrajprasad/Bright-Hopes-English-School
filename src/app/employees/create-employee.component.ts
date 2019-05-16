import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import {Http} from '@angular/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  // gender = 'female'; // checked by default HTML checked attribute does not work
  // isActive = true;
  // department = '2'; // selected does not work with NgModel 2 way data binding

  departments: Department[] = [
    { id: 1, name: 'HelpDesk'},
    { id: 2, name: 'IT'},
    { id: 3, name: 'HR'},
    { id: 4, name: 'Payroll'}
  ];

  constructor(private http: HttpClient , private router: Router ) {
   }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit () {
  }

  public saveEmployee(employee: Employee) {
   this.http.post<Employee>('http://localhost:7462/employee/add', employee)
   .subscribe( data => console.log(data));
    this.router.navigate(['/show']);
  }
}
