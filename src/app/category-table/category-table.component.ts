import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(private prodServ: CategoryService) { }

  ngOnInit() {
    this.categories = this.prodServ.getCategorys();
  }

  @Output() selectCategory = new EventEmitter<Category>();
  @Output() add = new EventEmitter<boolean>();

  selectedCategory(category: Category) {
    this.selectCategory.emit(category);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectCategory.emit(this.prodServ.initializeNew());
    this.add.emit(true);
  }

}
