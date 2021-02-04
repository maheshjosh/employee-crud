import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/employee',
  },
  {
    path: 'employee',
    pathMatch: 'full',
    component: EmployeeListComponent
  },
  {
    path: 'add-employee',
    pathMatch: 'full',
    component: AddEditEmployeeComponent
  },
  {
    path: 'edit-employee',
    pathMatch: 'full',
    component: AddEditEmployeeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
