import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private route:ActivatedRoute, private postServ:PostService) { }

  ngOnInit() {
    this.route.params.subscribe(param => 
      this.postServ.getPostBySlug(param['slug']).subscribe(posts => this.post = posts[0])
    );
  }

  post: Post;

}
