import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Filter {
  showOnlySale?: boolean;
  highPrize?: number;
}

export class SaleItem {
  id?: number;
  name?: string;
  phone?: string;
  address?: any;
}

export class CartItem extends SaleItem {
  count?= 0;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor() { }

  // getObservaleProducts(sort: Filter) {
  //   return of(this.getProducts()).pipe(
  //     map(products => {
  //       return !sort
  //         ? products
  //         : products.filter(item => {
  //           const result_sort = sort.showOnlySale
  //             ? sort.showOnlySale === item.sale
  //             : true;

  //           const result_prize = sort.highPrize
  //             ? sort.highPrize <= item.price
  //             : true;

  //           return result_sort && result_prize;
  //         });
  //     })
  //   );
  // }

  getObservableCart(): Observable<CartItem[]> {
    return of(this.getCart());
  }

  async addToCart(item: SaleItem) {
    const items: SaleItem[] = this.getCart();
    items.push(item);
    await localStorage.setItem('Cart', JSON.stringify(items));
  }

  async isinCart(id: number) {
    const items = this.getCart();
    const result = await items.map(item => {
      return item.id === id;
    });
    return result.includes(true);
  }

  getCart(): CartItem[] {
    return JSON.parse(localStorage.getItem('Cart') || '[]');
  }

  getProducts(): SaleItem[] {
    return [{
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
    ]
  }


}

