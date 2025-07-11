import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { ExpensesTableComponent} from '../expenses-table/expenses-table.component'
import { ExpensesService } from '../expenses-service.service'
import { config } from 'rxjs';


@Component({
  selector: 'app-expense-form',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, ExpensesTableComponent],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css'
})
export class ExpenseFormComponent implements OnInit{

  private formBuilder = inject(FormBuilder);
  private expensesService = inject(ExpensesService)

  currentDate: Date = new Date();
  datePipe = new DatePipe('en-US');
  formattedDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
  category_list: any = []

  expenseForm = new FormGroup({
    date: new FormControl(this.formattedDate, Validators.required),
    cost: new FormControl(0, Validators.required),
    category: new FormControl('', Validators.required),
    note: new FormControl('')
  
  })

  expenses_list :any[]  = []

  ngOnInit(){
    this.expensesService.getCategories().subscribe(config => {
      this.category_list = config;
  });
  }

  cat_options = [
    'Fuel',
    'Rent',
    'Credit-Card Bills',
    'Shopping',
    'Electricity Bill',
    'Other Bills',
    'Grocery'
  ]

  addExpense() {
    console.log(this.expenseForm.value)
    this.expenses_list.push(this.expenseForm.value);
    // this.expenseForm.reset()
    // this.expenseForm = this.expenseForm
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.expenseForm);
  }

  editItem(itemIndex : number){
    console.log("In form edit... " , itemIndex)
    let item = this.expenses_list.at(itemIndex)
    console.log(item)
    this.expensesService.getCategories()
  }

  deleteItem(itemIndex: number){
    // delete this.expenses_list[itemIndex];
    this.expenses_list.splice(itemIndex,1)
    console.log("Item deleted")
    console.log(this.expenses_list)
  }

}
