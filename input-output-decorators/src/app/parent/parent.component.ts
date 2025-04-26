import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  channelNameInParent = '';

  messageFromChild = '';

  receiveMessage(msg: any) {
    console.log(msg);
    this.messageFromChild = msg;
  }
}
