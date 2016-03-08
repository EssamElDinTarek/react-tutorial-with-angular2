import {Component} from 'angular2/core';

@Component({
    selector: 'my-comment-form',
    template: 
    `
    <form className="commentForm" (ngSubmit)="handleSubmit()">
      <input [(ngModel)]="author" placeholder="Your name" />
      <input [(ngModel)]="text" placeholder="Say something..." />
      <input type="submit" value="Post" />
    </form>
    `
})

export class CommentFormComponent { 
  public author: string
  public text: string
  
  handleSubmit(e) {
    if (!this.author || !this.text) {
       return;
     }
         
    // TODO: send request to the server         
    this.author = ''
    this.text = ''
  }  
}
