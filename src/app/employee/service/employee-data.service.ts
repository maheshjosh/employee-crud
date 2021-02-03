import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeDataService {

  // private serverUrl = 'http://localhost:3000/';

  constructor() { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getEmployee() {
    return this.employee;
    //return this.http.get(this.serverUrl + 'employee').pipe(map(this.extractData));
  }

  getEmployeeById(id) {
    return this.employee[id];
    //return this.http.get(this.serverUrl + 'employee/' + id).pipe(map(this.extractData));
  }

  updateEmployee(id, emp) {
    this.employee[id] = emp;
    return emp;
    //return this.http.put(this.serverUrl + 'employee/' + id, JSON.stringify(emp));
  }

  savaEmployee(emp) {
    this.employee.push(emp);
    return emp;
  }

  deleteEmployee(id, index) {
    return this.employee[id];
  }

  employee = [
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
    },
    {
      "id": 4,
      "name": "",
      "phone": "",
      "address":
      {
        "city": "",
        "address_line1": "",
        "address_line2": "",
        "postal_code": ""
      }
    }
  ];

}

