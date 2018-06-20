import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../../shared/services/listservice.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  
  public commentsList:[{}];
  public title:string = "Comments List";
  public totalreslist:any = [];
  constructor(
    private listService:ListserviceService
  ) {}

  ngOnInit() {
    this.listService.getList()
        .subscribe(result => {
          this.totalreslist = result;
          this.commentsList = this.totalreslist.splice(0,10);
        });
  }

  onScroll(){
    this.commentsList = this.totalreslist.splice(0,this.commentsList.length+10)
  }

}
