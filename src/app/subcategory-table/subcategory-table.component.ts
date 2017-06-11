import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subcategory } from '../shared/subcategory.model';
import { SubcategoryService } from '../shared/subcategory.service';

@Component({
  selector: 'app-subcategory-table',
  templateUrl: './subcategory-table.component.html',
  styleUrls: ['./subcategory-table.component.css']
})
export class SubcategoryTableComponent implements OnInit {

  categories: Observable<Subcategory[]>;

  constructor(private prodServ: SubcategoryService) { }

  ngOnInit() {
    this.categories = this.prodServ.getSubcategorys();
  }

  @Output() selectCategory = new EventEmitter<Subcategory>();
  @Output() add = new EventEmitter<boolean>();

  selectedCategory(category: Subcategory) {
    this.selectCategory.emit(category);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectCategory.emit(this.prodServ.initializeNew());
    this.add.emit(true);
  }

}
