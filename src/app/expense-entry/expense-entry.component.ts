import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {

  constructor() { }
title:string ="";
expenseEntry:IExpenseEntry= {
  id:1,
   item:"Pizza",
   amount:100,
   category:"Food",
   location:"Zometo",
   spendOn:new Date(2020, 6, 1, 10, 10, 10),
   createdOn:new Date(2020, 6, 1, 10, 10, 10)

};
  ngOnInit(): void {
    this.title="Expense Entry"
    
  }

}

export interface IExpenseEntry{
  id:number,
  item:string,
  amount:number,
  category:string,
  location:string,
  spendOn:Date,
  createdOn:Date
}