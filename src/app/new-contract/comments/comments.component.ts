import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { Comment } from './models/comment';
import { NgForm } from '@angular/forms';
import { CommentService } from './services/comment.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: Comment[] = [];
  public comment: Comment;

  displayedColumns: string[] = ['date', 'comment', 'person', 'edit'];

  constructor(private service: CommentService,private router: Router) { }

  ngOnInit(): void {
    this.comment = this.clearFormInputArea();
    this.getAllAddedComment();

  }

  getAllAddedComment() {
    let comments: Comment[] = [];

    const data = this.service.getAllAddedComment().subscribe(res => {
      console.log(res);
     
      for (let index = 0; index < res.length; index++) {
        comments.push(new Comment(parseInt(sessionStorage.getItem('Id') as string), res[index]['Id'], res[index]['Text'], res[index]['Username'], res[index]['Date']));
      }

      this.comments = comments;
    });
  }

  clearFormInputArea(): Comment {
    return new Comment(parseInt(sessionStorage.getItem('Id') as string), 0, "", "", "Datum");
  }

  getCommentById(id: number): Comment {
    return this.comments.filter(x => x.Id === id)[0];
  }

  hasFormFilledProperly(notificationForm: NgForm): boolean {
    let values = new Array();

    Object.entries(notificationForm.value).forEach(([key, value]) => values.push(value));

    if (values.includes("")) {
      return false;
    }
    return true;
  }

  submit(commentForm: NgForm): void {

    // if(this.hasFormFilledProperly(commentForm)) {

    // }

    let comment = {
      'contractId': sessionStorage.getItem('Id'),
      'id': this.comment.Id,
      'username': "Farasat",
      'date': "2022-06-22",
      'text': commentForm.value['comment']
    }

    this.service.createComment(comment).subscribe(response => {
      console.log(response);
      this.comment = this.clearFormInputArea();
      commentForm.reset();
      this.getAllAddedComment();
    })
  }

  edit(id: number) {
    this.comment = this.getCommentById(id);
  }

  deleteById(id: number) {

  }
  gotoNextPage(){
    this.router.navigate(['contract/signed']); 
  }
  gotoLastPage(){
    this.router.navigate(['contract/notification']); 
  }

}
