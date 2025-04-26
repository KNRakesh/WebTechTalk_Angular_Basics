import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input()
  channelName = 'WebTechTalks';

  @Output()
  sendMessageEmitter = new EventEmitter();

  sendMessageToParent(e: any) {
    console.log(e.target.value);
    this.sendMessageEmitter.emit(e.target.value);
  }
}
