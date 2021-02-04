import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeDataService } from '../service/employee-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})

export class AddEditEmployeeComponent implements OnInit, OnDestroy {
  empHeader = 'Add Employee';
  formId = null;
  empData = null;

  editEmployeeForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    address_line1: new FormControl(),
    address_line2: new FormControl(),
    city: new FormControl(),
    postal_code: new FormControl(),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeDataService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.formId = this.route.snapshot.queryParams['id'];
    this.validate();
    if (this.formId) {
      this.empHeader = 'Edit Employee';
      this.getEmployee(this.formId)
    }

  }

  validate() {
    this.editEmployeeForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/([0-9]{4,})|[1-9]/),
        Validators.minLength(6),
        Validators.maxLength(15),
      ]],
      address_line1: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]],
      address_line2: ['', [
        Validators.minLength(1),
        Validators.maxLength(100),
      ]],
      city: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]],
      postal_code: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]]
    });
  }

  getEmployee(formId) {
    this.empData = this.employeeService.getEmployeeById(formId);
    this.bindData(this.empData);
  }

  bindData(results?) {
    this.editEmployeeForm.controls.name.setValue(results.name);
    this.editEmployeeForm.controls.phone.setValue(results.phone);
    this.editEmployeeForm.controls.address_line1.setValue(results.address.address_line1);
    this.editEmployeeForm.controls.address_line2.setValue(results.address.address_line2);
    this.editEmployeeForm.controls.city.setValue(results.address.city);
    this.editEmployeeForm.controls.postal_code.setValue(results.address.postal_code);
  }

  onClickAddEmployee() {
    const data = {
      name: this.editEmployeeForm.controls.name.value,
      phone: this.editEmployeeForm.controls.phone.value,
      address: {
        address_line2: this.editEmployeeForm.controls.address_line2.value,
        address_line1: this.editEmployeeForm.controls.address_line1.value,
        city: this.editEmployeeForm.controls.city.value,
        postal_code: this.editEmployeeForm.controls.postal_code.value,
      }
    };

    if (this.formId) {
      this.empData = this.employeeService.updateEmployee(this.formId, data);
      this.router.navigate(['/employee']);
      setTimeout(() => {
        this.editEmployeeForm.reset();
      }, 100)
    } else {
      this.empData = this.employeeService.savaEmployee(data);
      this.router.navigate(['/employee']);
      setTimeout(() => {
        this.editEmployeeForm.reset();
      }, 100)
    }
  }

  goBack() {
    this.location.back();
  }


  ngOnDestroy() {
    this.formId = null;
    this.empData = null;
    this.editEmployeeForm.reset();
  }
}


