import { Component, OnInit, Input } from '@angular/core';
import { AncientHistoryService } from '../shared/ancient-history.service';
import { AncientHistory } from '../shared/ancient-history.model';

@Component({
  selector: 'app-ancient-history-form',
  templateUrl: './ancient-history-form.component.html',
  styleUrls: ['./ancient-history-form.component.css']
})
export class AncientHistoryFormComponent implements OnInit {

constructor(private ancientServ: AncientHistoryService) { }
  
  ngOnInit() {
    
  }

  ngOnChanges(){
    this.msg = "";
    this.msg1 = "";
  }

  @Input() post: AncientHistory;
  @Input() addPost: boolean;
  
  msg: string;
  msg1: string;

  updatePost() {
    this.ancientServ.updateAncientHistory(this.post)
      .then(onresolev => {this.msg = "Updated Successfully", this.post = null})
      .catch(onreject => this.msg1 = onreject.message);
  }

  deletePost() {
    this.ancientServ.deleteAncientHistory(this.post)
      .then(onresolev => {this.msg = "Deleted Successfully", this.post = null})
      .catch(onreject => this.msg1 = onreject.message);
  }

  addNew() {
    this.ancientServ.addAncientHistory(this.post).then(onresolev => {
      this.msg = "Added Successfully"; 
      this.post = null;
    })
      .catch(onreject => this.msg1 = onreject.message);
  }

}
