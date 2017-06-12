import { Component, OnInit, Input } from '@angular/core';
import { SubcategoryService } from '../shared/subcategory.service';
import { CategoryService } from '../shared/category.service';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { Observable } from 'rxjs/Observable';
import { Category } from '../shared/category.model';
import { Subcategory } from '../shared/subcategory.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {

constructor(private prodServ: SubcategoryService, private catServ: CategoryService, private postServ: PostService) { }
  
  ngOnInit() {
    this.categories = this.catServ.getCategorys();
  }

  @Input() post: Post;
  @Input() addPost: boolean;
  
  categories: Observable<Category[]>;
  subcategories: Observable<Subcategory[]>;

  msg: string;
  msg1: string;

  updatePost() {
    this.postServ.updatePost(this.post)
      .then(onresolev => {this.msg = "Updated Successfully", this.post = null})
      .catch(onreject => this.msg1 = onreject.message);
  }

  deletePost() {
    this.postServ.deletePost(this.post)
      .then(onresolev => {this.msg = "Deleted Successfully", this.post = null})
      .catch(onreject => this.msg1 = onreject.message);
  }

  addNew() {
    this.postServ.addPost(this.post, this.post.category.$key, this.post.subcategories).then(onresolev => {
      this.msg = "Added Successfully"; 
      this.post = null;
      this.categories = this.catServ.getCategorys();
    })
      .catch(onreject => this.msg1 = onreject.message);
  }

  subcatChange(event){
    this.post.subcategories = event;
  }

  catChange(event){
    this.post.category = event;
    this.subcategories = this.prodServ.getSubcatsOfCat(this.post.category.$key);
  }

}
