import { Component, OnInit, Input } from '@angular/core';
import { SubcategoryService } from '../shared/subcategory.service';
import { Subcategory } from '../shared/subcategory.model';
import { CategoryService } from '../shared/category.service';
import { Observable } from 'rxjs/Rx';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-subcategory-form',
  templateUrl: './subcategory-form.component.html',
  styleUrls: ['./subcategory-form.component.css']
})
export class SubcategoryFormComponent implements OnInit {

constructor(private prodServ: SubcategoryService, private catServ: CategoryService) { }

  ngOnInit() {
    this.categories = this.catServ.getCategorys();
  }

  @Input() category: Subcategory;
  @Input() addCategory: boolean;
  
  categories: Observable<Category[]>;

  msg: string;
  msg1: string;

  updateCategory() {
    this.prodServ.updateSubcategory(this.category)
      .then(onresolev => this.msg = "Updated Successfully")
      .catch(onreject => this.msg1 = onreject.message);
  }

  deleteCategory() {
    this.prodServ.deleteSubcategory(this.category)
      .then(onresolev => this.msg = "Deleted Successfully")
      .catch(onreject => this.msg1 = onreject.message);
  }

  addNew() {
    this.prodServ.addSubcategory(this.category, this.category.parent.$key);
    //this.category.parent = null;
  }

  getNew(event){
    this.category.parent = event;
    console.log("pp "+ this.category.parent.name);
  }

}
