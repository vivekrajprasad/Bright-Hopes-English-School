import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'show', component: ShowEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    ShowEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // DatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    // BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
