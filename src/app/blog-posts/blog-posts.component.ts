import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Observable } from 'rxjs/Rx';
import { Post } from '../shared/post.model';
import { Router } from '@angular/router';
import { SubcategoryService } from '../shared/subcategory.service';
import { Subcategory } from '../shared/subcategory.model';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  constructor(private postServ: PostService, private router: Router, private subcat: SubcategoryService, private catServ: CategoryService) { }

  ngOnInit() {
    this.posts = this.postServ.getPosts(this.p);
    this.categories = this.catServ.getCategorys();
    //this.subcat.getSubcategorys().subscribe(subcats => this.options = subcats);
  }

  posts: Observable<Post[]>;
  p: number = 1;

  readPost(slug: string) {
    this.router.navigate(['/posts', slug]);
  }

  options: Subcategory[];

  checked: string[] = [];

  updateChecked(option, event) {
    console.log('event.target.value ' + event.target.value);
    var index = this.checked.indexOf(option);
    if (event.target.checked) {
      console.log('add');
      if (index === -1) {
        this.checked.push(option);
        this.posts = this.postServ.getSubcategoryPosts(this.checked, this.p);
      }
    } else {
      console.log('remove');
      if (index !== -1) {
        this.checked.splice(index, 1);
        if(this.checked.length == 0){
          this.posts = this.postServ.getCategoryPosts(this.category.$key, this.p);
        }
        else{
          this.posts = this.postServ.getSubcategoryPosts(this.checked, this.p);
        }
      }
    }
    //this.checked[option]=event.target.value; // or `event.target.value` not sure what this event looks like
    console.log(this.checked);
  }

  changePage(event) {
    this.p = event;
    if (this.checked.length == 0 && this.category!= undefined ) {
      this.posts = this.postServ.getCategoryPosts(this.category.$key, this.p);
    }
    else if(this.checked.length != 0){
      this.posts = this.postServ.getSubcategoryPosts(this.checked, this.p);
    }
    else{
      this.posts = this.postServ.getPosts(this.p);
    }
  }

  categories: Observable<Category[]>;
  category: Category;

  catChange(event) {
    this.category = event;
    console.log('ca ' + this.category.name);
    this.posts = this.postServ.getCategoryPosts(this.category.$key, this.p);
    this.subcat.getSubcatsOfCat(this.category.$key).subscribe(res => this.options = res);
  }

}
