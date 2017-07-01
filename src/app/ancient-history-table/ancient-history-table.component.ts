import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AncientHistory } from '../shared/ancient-history.model';
import { AncientHistoryService } from '../shared/ancient-history.service';

@Component({
  selector: 'app-ancient-history-table',
  templateUrl: './ancient-history-table.component.html',
  styleUrls: ['./ancient-history-table.component.css']
})
export class AncientHistoryTableComponent implements OnInit, OnChanges {

  posts: Observable<AncientHistory[]>;

  constructor(private prodServ: AncientHistoryService) { }
  
  p: number;
  contentType: string;

  ngOnInit() {
    this.p = 1;
    this.contentType = "adhunik-itihas";
    this.posts = this.prodServ.getAncientHistorys(this.contentType);
  }

  ngOnChanges(){
    this.posts = this.prodServ.getAncientHistorys(this.contentType);
  }

  @Output() selectPost = new EventEmitter<AncientHistory>();
  @Output() add = new EventEmitter<boolean>();

  selectedPost(post: AncientHistory) {
    this.selectPost.emit(post);
    this.add.emit(false);
  }

  initializeNew() {
    this.selectPost.emit(this.prodServ.initializeNew());
    this.add.emit(true);
  }

  changeContentType(event){
    this.posts = this.prodServ.getAncientHistorys(event);
  }

  changePage(event) {
    this.p = event;
    //this.posts = this.prodServ.getUserPosts(this.p);
  }

}
