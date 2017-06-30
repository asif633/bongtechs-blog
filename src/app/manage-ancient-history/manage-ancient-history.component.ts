import { Component, OnInit } from '@angular/core';
import { AncientHistory } from '../shared/ancient-history.model';

@Component({
  selector: 'app-manage-ancient-history',
  templateUrl: './manage-ancient-history.component.html',
  styleUrls: ['./manage-ancient-history.component.css']
})
export class ManageAncientHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedPost: AncientHistory;
  
  getPost(event){
    this.selectedPost = event;
  }

  add: boolean;
  
  getAdd(event){
    this.add = event;
  }

}
