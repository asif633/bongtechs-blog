import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  selectedCategory: Category;
  
  getCategory(event){
    this.selectedCategory = event;
  }

  add: boolean;
  
  getAdd(event){
    this.add = event;
  }

}
