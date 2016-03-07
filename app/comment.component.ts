import {Component, Input} from 'angular2/core';

@Component({
    selector: 'my-comment',
    template: 
    `
    <div className="comment">
      <h2 className="commentAuthor">
        {{author}}
      </h2>
      {{comment}}
    </div>
    `
})

export class CommentComponent {
  @Input() author: string
  @Input() comment: string
}
