import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
    this.employeeData = this.employeeService.getEmployee();


    // this.getEmployeeData();
  }


  public onQuickFilterChanged($event) {
    if ($event.key === 'Enter') {
      const restArr = []
      if (this.search && this.search !== '') {
        this.employeeData.filter((element) => {
          if (element.name.toLowerCase() == this.search.toLowerCase()) {
            restArr.push(element);
          }
          this.employeeData = restArr
        })
      }
    } else {
      this.employeeData = this.employeeService.getEmployee();
    }
  }
  // onClickEdit(formId) {
  //   debugger
  // }


}
