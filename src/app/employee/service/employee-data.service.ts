import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeDataService {
  empData = [];

  constructor() {
    this.empData = this.getItem('employee');

    if (!this.empData) {
      this.setItem('employee', this.dumyEmployee);
    }

    if (this.empData) {
      if (this.empData.length < 4) {
        this.setItem('employee', this.dumyEmployee);
      }
    }

  }

  getEmployee() {
    this.empData = this.getItem('employee');
    return this.empData;
  }

  getEmployeeById(id) {
    if (id) {
      let res;
      this.empData.filter((element) => {
        if (id == element.id) {
          res = element;
        }
      })
      return res;
    }
  }

  updateEmployee(id, emp) {
    emp.id = id;
    const index = Number(id) - 1;
    this.empData[index] = emp;
    this.setItem('employee', this.empData);
  }

  savaEmployee(emp) {
    emp.id = this.empData.length + 1;
    this.empData.push(emp);
    this.setItem('employee', this.empData);
  }

  getItem<T>(key: string): T {
    let result = null;
    result = localStorage.getItem(key);
    if (result != null) {
      result = JSON.parse(result);
    }
    return result;
  }

  setItem<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  dumyEmployee = [
    {
      "id": 1,
      "name": "Jhon",
      "phone": "9999999999",
      "address":
      {
        "city": "Pune",
        "address_line1": "ABC road",
        "address_line2": "XYZ building",
        "postal_code": "12455"
      }
    }, {
      "id": 2,
      "name": "Jacob",
      "phone": "AZ99A99PQ9",
      "address":
      {
        "city": "Pune",
        "address_line1": "PQR road",
        "address_line2": "ABC building",
        "postal_code": "13455"
      }
    }, {
      "id": 3,
      "name": "Ari",
      "phone": "145458522",
      "address":
      {
        "city": "Mumbai",
        "address_line1": "ABC road",
        "address_line2": "XYZ building",
        "postal_code": "12455"
      }
    }
  ];

}

