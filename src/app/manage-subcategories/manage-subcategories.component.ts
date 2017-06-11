import { Component, OnInit } from '@angular/core';
import { Subcategory } from '../shared/subcategory.model';

@Component({
  selector: 'app-manage-subcategories',
  templateUrl: './manage-subcategories.component.html',
  styleUrls: ['./manage-subcategories.component.css']
})
export class ManageSubcategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedCategory: Subcategory;
  
  getCategory(event){
    this.selectedCategory = event;
  }

  add: boolean;
  
  getAdd(event){
    this.add = event;
  }

}
