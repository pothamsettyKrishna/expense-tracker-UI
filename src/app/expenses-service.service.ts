import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  expenses_api = 'http://127.0.0.1:8080/expenses/'

  getCategories(){
    var categories_list = this.http.get(this.expenses_api + "getcategories")
    return categories_list;
  }
}
