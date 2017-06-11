import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedPost: Post;
  
  getPost(event){
    this.selectedPost = event;
  }

  add: boolean;
  
  getAdd(event){
    this.add = event;
  }

}
