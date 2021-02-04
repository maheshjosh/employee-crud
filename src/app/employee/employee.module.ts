import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEditEmployeeComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class EmployeeModule { }
