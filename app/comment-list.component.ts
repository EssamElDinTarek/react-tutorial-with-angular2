import {Component} from 'angular2/core';
import {CommentComponent} from './comment.component';

@Component({
    selector: 'my-comment-list',
    template: 
    `
    <div className="commentList">
      <my-comment author="Pete Hunt" comment="This is one comment"></my-comment>
      <my-comment author="Jordan Walke" comment="This is *another* comment"></my-comment>
    </div>
    `,
    directives: [CommentComponent]
})

export class CommentListComponent { }
