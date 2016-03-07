import {Component} from 'angular2/core';
import {CommentListComponent} from './comment-list.component';
import {CommentFormComponent} from './comment-form.component';

@Component({
    selector: 'my-comment-box',
    template: 
    `
    <div className="commentBox">
      <h1>Comments</h1>
      <my-comment-list></my-comment-list>
      <my-comment-form></my-comment-form>
    </div>
    `,
    directives: [CommentListComponent, CommentFormComponent],
})

export class CommentBoxComponent {}
