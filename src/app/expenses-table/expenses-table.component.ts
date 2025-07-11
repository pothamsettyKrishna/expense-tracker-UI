import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expenses-table',
  imports: [CommonModule],
  templateUrl: './expenses-table.component.html',
  styleUrl: './expenses-table.component.css'
})
export class ExpensesTableComponent {
  @Input() expenses_list: any = [];
  @Output('itemChanged') changed = new EventEmitter<number>();
  @Output('deleteItem') deleteItem = new EventEmitter<number>();


  editItem(itemIndex: number){
    console.log("Editing item")
    console.log(itemIndex)
    this.changed.emit(itemIndex);
  }

  deleteRow(itemIndex: number){
    this.deleteItem.emit(itemIndex);
  }
}
