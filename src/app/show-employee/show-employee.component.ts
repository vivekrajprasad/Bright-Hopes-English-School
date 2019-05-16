import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})

export class ShowEmployeeComponent implements OnInit {
  public employees: Employee[];
  private employeeObservable: Observable<Employee[]> ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEmployee();
  }

  public getEmployee() {
   // this.employeeObservable = this.http.get<Employee[]>('http://localhost:7462/employee/a');
   this.http.get<Employee[]>('http://localhost:7462/employee/a').subscribe((data: Employee[]) => this.employees = data);
    //this.http.get<Employee[]>('http://localhost:7462/employee/a').subscribe((data: Employee[]) => console.log(data));
  // console.log(this.employees);
   }

}
