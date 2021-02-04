import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeDataService } from '../service/employee-data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeData: any = [];
  search = '';

  constructor(
    private employeeService: EmployeeDataService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.employeeData = this.employeeService.getEmployee();
  }


  public onQuickFilterChanged($event) {
    if ($event.key === 'Enter') {
      const restArr = []
      if (this.search && this.search !== '') {
        this.employeeData.filter((element) => {
          if (this.search.toLowerCase() == element.name.toLowerCase()) {
            restArr.push(element);
          }

          if (this.search.toLowerCase() == element.address.city.toLowerCase()) {
            restArr.push(element);
          }
          this.employeeData = restArr
        })
      }
    } else {
      this.employeeData = this.employeeService.getEmployee();
    }
  }

  onClickAdd() {
    this.router.navigate(['/edit-employee']);
  }


  onClickEdit(formId) {
    this.router.navigate(['/edit-employee'], { queryParams: { id: formId } });
  }


}
