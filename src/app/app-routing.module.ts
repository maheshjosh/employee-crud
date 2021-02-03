import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
