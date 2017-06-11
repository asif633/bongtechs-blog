import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private prodServ: PostService) { }

  ngOnInit() {
    this.posts = this.prodServ.getPosts(1);
  }

  @Output() selectPost = new EventEmitter<Post>();
  @Output() add = new EventEmitter<boolean>();

  selectedPost(category: Post) {
    this.selectPost.emit(category);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectPost.emit(this.prodServ.initializeNew());
    this.add.emit(true);
  }

}
