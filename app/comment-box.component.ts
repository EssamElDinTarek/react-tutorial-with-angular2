import {Component} from 'angular2/core';
import {CommentListComponent} from './comment-list.component';
import {CommentFormComponent} from './comment-form.component';
import {Comment} from './comment'

@Component({
    selector: 'my-comment-box',
    template: 
    `
    <div className="commentBox">
      <h1>Comments</h1>
      <my-comment-list [comments]="comments"></my-comment-list>
      <my-comment-form></my-comment-form>
    </div>
    `,
    directives: [CommentListComponent, CommentFormComponent],
})

export class CommentBoxComponent {
  public comments: Comment[] = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
  ];  
}
