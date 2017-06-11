import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(private prodServ: CategoryService) { }

  ngOnInit() {
  }

  @Input() category: Category;
  @Input() addCategory: boolean;

  msg: string;
  msg1: string;

  updateCategory() {
    this.prodServ.updateCategory(this.category)
      .then(onresolev => this.msg = "Updated Successfully")
      .catch(onreject => this.msg1 = onreject.message);
  }

  deleteCategory() {
    this.prodServ.deleteCategory(this.category)
      .then(onresolev => this.msg = "Deleted Successfully")
      .catch(onreject => this.msg1 = onreject.message);
  }

  addNew() {
    this.prodServ.addCategory(this.category)
      .then(onresolev => this.msg = "Added Successfully")
      .catch(onreject => this.msg1 = onreject.message);
  }

}
